import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={closeMenu}><i className="fas fa-times"></i></button>
        <a href="#hero" onClick={closeMenu}>Inicio</a>
        <a href="#about" onClick={closeMenu}>Sobre mí</a>
        <a href="#skills" onClick={closeMenu}>Habilidades</a>
        <a href="#projects" onClick={closeMenu}>Proyectos</a>
        <a href="#services" onClick={closeMenu}>Servicios</a>
        <a href="#contact" onClick={closeMenu}>Contacto</a>
      </div>

      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <div className="nav-inner">
            <a href="#hero" className="nav-logo">
              <div className="nav-logo-icon">&lt;/&gt;</div>
              <span className="nav-logo-text">Oscar <span>Osorio</span></span>
            </a>
            <ul className="nav-links">
              <li><a href="#about">Sobre mí</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#process">Proceso</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#experience">Experiencia</a></li>
            </ul>
            <a href="#contact" className="btn btn-primary nav-cta" style={{ padding: '11px 22px', fontSize: '.84rem' }}>
              <i className="fas fa-paper-plane"></i> Contáctame
            </a>
            <button className="hamburger" onClick={() => setMenuOpen(true)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
