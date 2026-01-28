
const Skills = () => {
  const skills = [
    { name: 'React', level: 95, category: 'frontend', color: '#61DAFB' },
    { name: 'JavaScript', level: 90, category: 'lenguaje', color: '#F7DF1E' },
    { name: 'Node.js', level: 85, category: 'backend', color: '#339933' },
    { name: 'HTML/CSS', level: 98, category: 'fundamentos', color: '#E34F26' },
    { name: 'Git/GitHub', level: 92, category: 'herramientas', color: '#F05032' },
    { name: 'MongoDB', level: 80, category: 'database', color: '#47A248' },
    { name: 'AWS', level: 75, category: 'cloud', color: '#FF9900' },
    { name: 'TypeScript', level: 88, category: 'lenguaje', color: '#3178C6' },
  ];
  
  const oxygenLevels = [75, 60, 45, 30, 15]; // Niveles de oxígeno para el diseño

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="ice-axe-icon">🧗‍♂️</span> Equipo Técnico
        </h2>
        <p className="section-subtitle">Herramientas para escalar cualquier proyecto</p>
      </div>
      
      <div className="oxygen-levels">
        {oxygenLevels.map((level, index) => (
          <div key={index} className="oxygen-meter">
            <div className="oxygen-label">O₂: {level}%</div>
            <div className="oxygen-bar">
              <div 
                className="oxygen-fill" 
                style={{ height: `${level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <h3 className="skill-name">{skill.name}</h3>
              <span 
                className="skill-category"
                style={{ backgroundColor: skill.color }}
              >
                {skill.category}
              </span>
            </div>
            
            <div className="skill-visualization">
              <div className="mountain-progress">
                <div 
                  className="progress-fill"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(to right, ${skill.color}, #fff)`
                  }}
                ></div>
                <div className="progress-label">{skill.level}%</div>
              </div>
              
              <div className="altitude-bars">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i}
                    className="altitude-bar"
                    style={{
                      height: `${Math.random() * 30 + 10}px`,
                      opacity: skill.level / 100 > i/10 ? 1 : 0.3
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;