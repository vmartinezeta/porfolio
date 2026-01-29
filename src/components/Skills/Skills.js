import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [selectedTool, setSelectedTool] = useState(null);
  
  const toolsGrid = [
    {
      id: 1,
      name: 'React',
      category: 'Frontend',
      icon: '⚛️',
      color: '#61DAFB',
      description: 'Biblioteca para interfaces de usuario',
      proficiency: 95,
      altitude: 7800,
      features: ['Componentes', 'Hooks', 'Context API'],
      toolType: 'Piolet Principal'
    },
    {
      id: 2,
      name: 'Node.js',
      category: 'Backend',
      icon: '🟢',
      color: '#339933',
      description: 'Entorno de ejecución JavaScript',
      proficiency: 88,
      altitude: 7100,
      features: ['Express', 'APIs REST', 'Socket.io'],
      toolType: 'Cuerda Dinámica'
    },
    {
      id: 3,
      name: 'TypeScript',
      category: 'Lenguaje',
      icon: '📘',
      color: '#3178C6',
      description: 'JavaScript con tipado estático',
      proficiency: 92,
      altitude: 7500,
      features: ['Tipos', 'Interfaces', 'Genéricos'],
      toolType: 'Brújula'
    },
    {
      id: 4,
      name: 'MongoDB',
      category: 'Database',
      icon: '🍃',
      color: '#47A248',
      description: 'Base de datos NoSQL',
      proficiency: 85,
      altitude: 6800,
      features: ['Documentos', 'Agregaciones', 'Atlas'],
      toolType: 'GPS'
    },
    {
      id: 5,
      name: 'AWS',
      category: 'Cloud',
      icon: '☁️',
      color: '#FF9900',
      description: 'Plataforma de computación en la nube',
      proficiency: 82,
      altitude: 6500,
      features: ['EC2', 'S3', 'Lambda'],
      toolType: 'Tienda de Campaña'
    },
    {
      id: 6,
      name: 'Git',
      category: 'Control',
      icon: '🌳',
      color: '#F05032',
      description: 'Sistema de control de versiones',
      proficiency: 96,
      altitude: 8000,
      features: ['GitHub', 'GitLab', 'CI/CD'],
      toolType: 'Mosquetón'
    },
    {
      id: 7,
      name: 'Docker',
      category: 'DevOps',
      icon: '🐳',
      color: '#2496ED',
      description: 'Contenedores de aplicaciones',
      proficiency: 80,
      altitude: 6300,
      features: ['Containers', 'Docker Compose', 'Swarm'],
      toolType: 'Oxígeno Portátil'
    },
    {
      id: 8,
      name: 'Figma',
      category: 'Diseño',
      icon: '🎨',
      color: '#F24E1E',
      description: 'Herramienta de diseño colaborativo',
      proficiency: 78,
      altitude: 6000,
      features: ['Prototipos', 'Design Systems', 'Plugins'],
      toolType: 'Mapa Topográfico'
    },
    {
      id: 9,
      name: 'GraphQL',
      category: 'API',
      icon: '📊',
      color: '#E10098',
      description: 'Lenguaje de consulta para APIs',
      proficiency: 75,
      altitude: 5800,
      features: ['Queries', 'Mutations', 'Subscriptions'],
      toolType: 'Altímetro Digital'
    }
  ];

  const expeditionLevels = [
    { level: 'Campo Base', altitude: 5364, color: '#27ae60' },
    { level: 'Campo 1', altitude: 6065, color: '#3498db' },
    { level: 'Campo 2', altitude: 6500, color: '#9b59b6' },
    { level: 'Campo 3', altitude: 7200, color: '#e74c3c' },
    { level: 'Cumbre', altitude: 8848, color: '#2c3e50' }
  ];

  return (
    <div className="container-skills">
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="tools-icon">🧰</span> Equipo de Escalada Técnica
        </h2>
        <p className="section-subtitle">Herramientas esenciales para conquistar cualquier proyecto</p>
        
        {/* Leyenda de altitud */}
        <div className="altitude-legend">
          {expeditionLevels.map((lvl, idx) => (
            <div key={idx} className="legend-item">
              <div 
                className="legend-color" 
                style={{ backgroundColor: lvl.color }}
              ></div>
              <span className="legend-label">{lvl.level}</span>
              <span className="legend-altitude">{lvl.altitude}m</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cuadrícula 3x3 */}
      <div className="tools-grid-container">
        <div className="tools-grid">
          {toolsGrid.map((tool) => (
            <div 
              key={tool.id}
              className={`tool-card ${selectedTool?.id === tool.id ? 'selected' : ''}`}
              onClick={() => setSelectedTool(tool)}
              style={{ 
                borderColor: tool.color,
                boxShadow: selectedTool?.id === tool.id ? 
                  `0 0 20px ${tool.color}80` : 'none'
              }}
            >
              {/* Encabezado de la herramienta */}
              <div className="tool-header">
                <div className="tool-icon-container">
                  <span className="tool-icon" style={{ color: tool.color }}>
                    {tool.icon}
                  </span>
                  <div className="tool-category">{tool.category}</div>
                </div>
                
                <div className="tool-title-section">
                  <h3 className="tool-name">{tool.name}</h3>
                  <div className="tool-type">{tool.toolType}</div>
                </div>
                
                <div className="altitude-badge" style={{ backgroundColor: tool.color }}>
                  {tool.altitude}m
                </div>
              </div>

              {/* Barra de progreso */}
              <div className="tool-progress">
                <div className="progress-labels">
                  <span>Proficiencia</span>
                  <span>{tool.proficiency}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${tool.proficiency}%`,
                      background: `linear-gradient(90deg, ${tool.color}, ${tool.color}80)`
                    }}
                  ></div>
                </div>
              </div>

              {/* Características */}
              <div className="tool-features">
                {tool.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">{feature}</span>
                ))}
              </div>

              {/* Efecto de herramienta activa */}
              <div className="tool-active-indicator"></div>
            </div>
          ))}
        </div>

        {/* Panel detallado de herramienta seleccionada */}
        {selectedTool && (
          <div className="tool-detail-panel">
            <button 
              className="close-detail"
              onClick={() => setSelectedTool(null)}
              aria-label="Cerrar detalles"
            >
              ×
            </button>
            
            <div className="detail-header">
              <div className="detail-icon" style={{ color: selectedTool.color }}>
                {selectedTool.icon}
              </div>
              <div>
                <h3 className="detail-title">{selectedTool.name}</h3>
                <div className="detail-subtitle">{selectedTool.description}</div>
              </div>
              <div 
                className="detail-altitude"
                style={{ backgroundColor: selectedTool.color }}
              >
                {selectedTool.altitude}m
              </div>
            </div>

            <div className="detail-content">
              <div className="detail-section">
                <h4>📋 Características</h4>
                <ul className="detail-features">
                  {selectedTool.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h4>🏔️ Nivel en la Expedición</h4>
                <div className="expedition-progress">
                  <div className="expedition-track">
                    {expeditionLevels.map((lvl, idx) => (
                      <div 
                        key={idx}
                        className="expedition-point"
                        style={{ 
                          left: `${(lvl.altitude / 8848) * 100}%`,
                          backgroundColor: lvl.color
                        }}
                        data-altitude={lvl.altitude}
                      >
                        <div className="point-label">{lvl.level}</div>
                      </div>
                    ))}
                    <div 
                      className="current-position"
                      style={{ 
                        left: `${(selectedTool.altitude / 8848) * 100}%`,
                        backgroundColor: selectedTool.color
                      }}
                    >
                      <div className="position-tool">{selectedTool.name}</div>
                    </div>
                  </div>
                  <div className="altitude-scale">
                    <span>0m</span>
                    <span>8848m</span>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h4>🎯 Casos de Uso</h4>
                <div className="use-cases">
                  <div className="use-case">
                    <div className="case-icon">⚡</div>
                    <div className="case-text">Aplicaciones de alto rendimiento</div>
                  </div>
                  <div className="use-case">
                    <div className="case-icon">🔧</div>
                    <div className="case-text">Proyectos escalables</div>
                  </div>
                  <div className="use-case">
                    <div className="case-icon">🚀</div>
                    <div className="case-text">Desarrollo rápido y eficiente</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-footer">
              <a 
                href={`#projects`}
                className="project-link-btn"
                style={{ backgroundColor: selectedTool.color }}
                onClick={() => {
                  // Scroll a proyectos que usen esta herramienta
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver proyectos con {selectedTool.name}
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Instrucciones */}
      <div className="grid-instructions">
        <div className="instruction">
          <span className="instruction-icon">👆</span>
          <span>Haz clic en cualquier herramienta para ver detalles</span>
        </div>
        <div className="instruction">
          <span className="instruction-icon">🎨</span>
          <span>Colores indican categoría de herramienta</span>
        </div>
        <div className="instruction">
          <span className="instruction-icon">🏔️</span>
          <span>Altitud representa complejidad/dominio</span>
        </div>
      </div>

      {/* Estadísticas del equipo */}
      <div className="tools-stats">
        <div className="stat-card">
          <div className="stat-value">{toolsGrid.length}</div>
          <div className="stat-label">Herramientas Dominadas</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">
            {Math.round(toolsGrid.reduce((acc, t) => acc + t.proficiency, 0) / toolsGrid.length)}%
          </div>
          <div className="stat-label">Proficiencia Promedio</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">
            {Math.round(toolsGrid.reduce((acc, t) => acc + t.altitude, 0) / toolsGrid.length)}m
          </div>
          <div className="stat-label">Altitud Media</div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Skills;