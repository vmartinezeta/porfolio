// components/Banner/Banner.jsx
import './Banner.css';

const Banner = () => {
  return (
    <section id="banner" className="everest-banner">
      <div className="banner-background">
        <div className="mountain-layer mountain-layer-1"></div>
        <div className="mountain-layer mountain-layer-2"></div>
        <div className="mountain-layer mountain-layer-3"></div>
        <div className="snow-peak"></div>
      </div>
      
      <div className="banner-content">
        <div className="climber-avatar">
          <div className="ice-axe"></div>
          <div className="helmet"></div>
        </div>
        
        <h1 className="banner-title">
          <span className="altitude">8,848</span>m de Pasión por el Código
        </h1>
        
        <p className="banner-subtitle">
          Como escalar el Everest, cada proyecto es un nuevo desafío
        </p>
        
        <div className="expedition-info">
          <div className="info-item">
            <span className="info-label">Experiencia</span>
            <span className="info-value">+5 años</span>
          </div>
          <div className="info-item">
            <span className="info-label">Proyectos Completados: </span>
            <span className="info-value">58</span>
          </div>
          <div className="info-item">
            <span className="info-label">Altitud Actual: </span>
            <span className="info-value">13°45'N</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;