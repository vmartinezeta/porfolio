// components/Projects/Projects.jsx
import { useState, useEffect } from 'react';
// import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Datos de ejemplo (en producción conectarías con GitHub API)
  useEffect(() => {
    // Simulación de fetch a GitHub API
    const mockProjects = [
      {
        id: 1,
        name: 'Everest Dashboard',
        description: 'Panel de control para monitoreo de métricas en tiempo real',
        language: 'React/TypeScript',
        stars: 42,
        forks: 12,
        url: 'https://github.com/tuusuario/everest-dashboard',
        difficulty: 'Advanced',
        altitude: 7, // de 10
      },
      {
        id: 2,
        name: 'Summit API',
        description: 'API REST para gestión de expediciones de montaña',
        language: 'Node.js/Express',
        stars: 28,
        forks: 8,
        url: 'https://github.com/tuusuario/summit-api',
        difficulty: 'Intermediate',
        altitude: 5,
      },
      {
        id: 3,
        name: 'Glacier UI',
        description: 'Biblioteca de componentes React inspirada en glaciares',
        language: 'React/Styled Components',
        stars: 65,
        forks: 15,
        url: 'https://github.com/tuusuario/glacier-ui',
        difficulty: 'Advanced',
        altitude: 8,
      },
      {
        id: 4,
        name: 'Base Camp CLI',
        description: 'Herramienta de línea de comandos para inicializar proyectos',
        language: 'JavaScript',
        stars: 15,
        forks: 3,
        url: 'https://github.com/tuusuario/basecamp-cli',
        difficulty: 'Beginner',
        altitude: 3,
      },
    ];
    
    setTimeout(() => {
      setProjects(mockProjects);
      setLoading(false);
    }, 1000);
  }, []);

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
                          <span className="flag-marker">🚩</span>
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