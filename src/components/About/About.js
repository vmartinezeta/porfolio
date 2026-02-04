import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="mountain-icon">⛰️</span> Mi Expedición
          <span className="route-grade">(Ahuachapán Sur)</span>
        </h2>
        <p className="section-subtitle">Del campo base a la cumbre del desarrollo</p>
      </div>
      
      <div className="expedition-timeline">
        <div className="timeline-item base-camp">
          <h3>Campo Base (2008-2010)</h3>
          <p>Fundamentos sólidos: HTML, CSS, JavaScript. Primeros proyectos académicos.</p>
          <div className="altitude-marker">5,364m</div>
        </div>
        
        <div className="timeline-item camp-1">
          <h3>Frameworks frontend (2018-2020)</h3>
          <p>Especialización frontend: React, Vue.js. Primer trabajo como desarrollador junior.</p>
          <div className="altitude-marker">6,065m</div>
        </div>
        
        <div className="timeline-item camp-2">
          <h3>Desarrollador web (2021-2022)</h3>
          <p>Backend y fullstack: Node.js, Express, MongoDB. Liderando proyectos pequeños.</p>
          <div className="altitude-marker">6,500m</div>
        </div>
        
        <div className="timeline-item camp-3">
          <h3>Arquitecturas (2023)</h3>
          <p>Arquitectura avanzada: Microservicios, AWS, DevOps. Mentoring junior developers.</p>
          <div className="altitude-marker">7,200m</div>
        </div>
        
        <div className="timeline-item summit">
          <h3>Zona de la Muerte - Cumbre (2024+)</h3>
          <p>Machine Learning, IA, Realidad Virtual. Buscando nuevos retos y horizontes.</p>
          <div className="altitude-marker">8,848m</div>
        </div>
      </div>
      
      <div className="climbing-philosophy">
        <blockquote className="everest-quote">
          "No escalamos montañas porque sean altas, 
          sino porque cada paso nos hace más fuertes. 
          Lo mismo aplica al código."
        </blockquote>
        <cite className="quote-author">— Edmund Hillary del código</cite>
      </div>
    </section>
  );
};

export default About;