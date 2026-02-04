
import { useState, useEffect } from 'react';

import './Projects.css';

const Projects = () => {
  const [projects, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/vmartinezeta/repos?sort=updated&per_page=8'
        );
        const data = await response.json();
        
        // Mapear datos de GitHub a nuestro formato
        const formattedProjects = data.map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          language: repo.language || 'Varios',
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          url: repo.html_url,
          difficulty: getDifficulty(repo),
          altitude: calculateAltitude(repo)
        }));
        
        setRepos(formattedProjects);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchGitHubRepos();
  }, []);
  
  const getDifficulty = (repo) => {
    // Lógica para determinar dificultad basada en métricas
    if (repo.size > 1000) return 'Advanced';
    if (repo.size > 500) return 'Intermediate';
    return 'Beginner';
  };
  
  const calculateAltitude = (repo) => {
    // Puntuación basada en estrellas, forks, etc.
    let score = Math.min(repo.stargazers_count / 10, 5);
    score += Math.min(repo.forks_count / 5, 3);
    score += repo.language ? 2 : 0;
    return Math.min(Math.floor(score), 10);
  };
  
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="flag-icon">🚩</span> Cumbres Alcanzadas
        </h2>
        <p className="section-subtitle">Proyectos que han llegado a la cumbre (GitHub)</p>
      </div>
      
      {loading ? (
        <div className="loading-expedition">
          <div className="climbing-loader"></div>
          <p>Preparando expedición a los repositorios...</p>
        </div>
      ) : (
        <>
          <div className="github-stats">
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-number">
                {projects.reduce((acc, proj) => acc + proj.stars, 0)}
              </div>
              <div className="stat-label">Total Stars</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🔄</div>
              <div className="stat-number">
                {projects.reduce((acc, proj) => acc + proj.forks, 0)}
              </div>
              <div className="stat-label">Forks</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏔️</div>
              <div className="stat-number">
                {projects.reduce((acc, proj) => acc + proj.altitude, 0)}
              </div>
              <div className="stat-label">Puntos de Altitud</div>
            </div>
          </div>
          
          <div className="projects-grid">
            {projects.map(project => (
              <div 
                key={project.id} 
                className={`project-card difficulty-${project.difficulty.toLowerCase()}`}
                data-altitude={project.altitude}
              >
                <div className="project-header">
                  <h3 className="project-title">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <span className="difficulty-badge">
                    {project.difficulty}
                  </span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-meta">
                  <span className="project-language">
                    <span 
                      className="language-color"
                      style={{
                        backgroundColor: project.language === 'React/TypeScript' ? '#3178C6' :
                                        project.language === 'Node.js/Express' ? '#339933' :
                                        project.language === 'React/Styled Components' ? '#DB7093' : '#F1E05A'
                      }}
                    ></span>
                    {project.language}
                  </span>
                  
                  <div className="project-stats">
                    <span className="stat">
                      <span role="img" aria-label="stars">⭐</span> {project.stars}
                    </span>
                    <span className="stat">
                      <span role="img" aria-label="forks">🔄</span> {project.forks}
                    </span>
                  </div>
                </div>
                
                <div className="altitude-visual">
                  <div className="altitude-scale">
                    {[...Array(10)].map((_, i) => (
                      <div 
                        key={i}
                        className={`altitude-step ${i < project.altitude ? 'reached' : 'unreached'}`}
                        title={`${i+1}000m`}
                      >
                        {i === project.altitude - 1 && (
                          <span className="flag-marker"></span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="altitude-label">
                    Altitud: {project.altitude}/10
                  </div>
                </div>
                
                <button 
                  className="expedition-btn"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  <span className="btn-icon">🧗‍♂️</span>
                  Iniciar Expedición al Repositorio
                </button>
              </div>
            ))}
          </div>
          
          <div className="github-cta">
            <a 
              href="https://github.com/tuusuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-profile-btn"
            >
              <span className="octocat-icon"></span>
              Ver perfil completo en GitHub
              <span className="arrow-icon">→</span>
            </a>
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;