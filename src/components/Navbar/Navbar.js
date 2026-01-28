import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Controlar scroll para efecto de transparencia
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSticky = () => {
    setIsSticky(!isSticky);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Altura del navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsOpen(false); // Cerrar menú en móvil después de click
    }
  };

  const menuItems = [
    { id: 'banner', label: 'Base Camp', icon: '⛺' },
    { id: 'about', label: 'Expedición', icon: '🧭' },
    { id: 'skills', label: 'Equipo', icon: '🧗‍♂️' },
    { id: 'projects', label: 'Cumbres', icon: '🏔️' }
  ];

  return (
    <nav className={`everest-navbar ${isSticky ? 'sticky' : 'relative'} ${scrolled ? 'scrolled' : ''}`}>
      {/* Capa de montaña decorativa */}
      <div className="nav-mountain-layer"></div>
      
      <div className="navbar-container">
        {/* Logo y nombre */}
        <div className="navbar-brand">
          <div className="mountain-logo">
            <div className="peak"></div>
            <div className="peak"></div>
            <div className="peak main-peak"></div>
          </div>
          <div className="brand-text">
            <h1 className="brand-title">Everest<span className="dev">Dev</span></h1>
            <p className="brand-subtitle">8,848m above sea code</p>
          </div>
        </div>

        {/* Botón toggle sticky */}
        <div className="sticky-toggle-container">
          <button 
            className={`sticky-toggle ${isSticky ? 'active' : ''}`}
            onClick={toggleSticky}
            aria-label={isSticky ? 'Desactivar navbar fijo' : 'Activar navbar fijo'}
            title={isSticky ? 'Hacer navbar relativo' : 'Fijar navbar'}
          >
            <span className="toggle-icon">
              {isSticky ? '📌' : '📍'}
            </span>
            <span className="toggle-text">
              {isSticky ? 'Fijo' : 'Móvil'}
            </span>
            <div className="toggle-indicator">
              <div className={`toggle-dot ${isSticky ? 'on' : 'off'}`}></div>
            </div>
          </button>
        </div>

        {/* Botón menú hamburguesa */}
        <button 
          className={`menu-toggle ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menú de navegación"
          aria-expanded={isOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="climbing-axe">🧗‍♂️</span>
        </button>

        {/* Menú de navegación */}
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <ul className="nav-items">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection(item.id)}
                  aria-label={`Ir a ${item.label}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  <span className="nav-altitude">
                    {item.id === 'banner' ? '5,364m' :
                     item.id === 'about' ? '6,500m' :
                     item.id === 'skills' ? '7,200m' : '8,848m'}
                  </span>
                </button>
              </li>
            ))}
            
            {/* Elemento adicional: Contacto externo */}
            <li className="nav-item contact-item">
              <a 
                href="mailto:contacto@example.com"
                className="nav-link contact-link"
                aria-label="Enviar correo electrónico"
              >
                <span className="nav-icon">📨</span>
                <span className="nav-label">Contacto</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
          </ul>

          {/* Indicador de altitud actual */}
          <div className="current-altitude">
            <div className="altitude-meter">
              <div className="altitude-fill" style={{ height: '65%' }}></div>
            </div>
            <div className="altitude-info">
              <span className="altitude-label">Altitud actual:</span>
              <span className="altitude-value">6,500m</span>
            </div>
          </div>
        </div>

        {/* Overlay para cerrar menú en móvil */}
        {isOpen && (
          <div 
            className="menu-overlay" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          ></div>
        )}
      </div>

      {/* Indicador de scroll progresivo */}
      <div className="scroll-indicator">
        <div 
          className="scroll-progress" 
          style={{ 
            width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` 
          }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;