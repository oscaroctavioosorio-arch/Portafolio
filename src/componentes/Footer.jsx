import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="nav-logo">
              <div className="nav-logo-icon">&lt;/&gt;</div>
              <span className="nav-logo-text">Oscar <span>Osorio</span></span>
            </a>
            <p>Desarrollador Web especializado en crear experiencias digitales excepcionales con React y el ecosistema JavaScript moderno.</p>
            <div className="footer-socials">
              <a href="https://github.com/oscaroctavioosorio-arch" target="_blank" rel="noopener noreferrer" className="footer-social"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/oscar-osorio" target="_blank" rel="noopener noreferrer" className="footer-social"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://wa.me/573153592437" target="_blank" rel="noopener noreferrer" className="footer-social"><i className="fab fa-whatsapp"></i></a>
              <a href="mailto:oscaroctavio.osorio@gmail.com" className="footer-social"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul className="footer-links">
              <li><a href="#hero">→ Inicio</a></li>
              <li><a href="#about">→ Sobre mí</a></li>
              <li><a href="#skills">→ Habilidades</a></li>
              <li><a href="#projects">→ Proyectos</a></li>
              <li><a href="#services">→ Servicios</a></li>
              <li><a href="#experience">→ Experiencia</a></li>
              <li><a href="#contact">→ Contacto</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Proyectos</h4>
            <ul className="footer-links">
              <li><a href="https://ellasnavegan.online/" target="_blank" rel="noopener noreferrer">→ Ellas Navegan</a></li>
              <li><a href="https://gratia-accesorios.netlify.app/" target="_blank" rel="noopener noreferrer">→ Gratia Accesorios</a></li>
            </ul>
            <h4 style={{ marginTop: '24px' }}>Contacto directo</h4>
            <ul className="footer-links">
              <li><a href="https://wa.me/573153592437" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" style={{ color: 'var(--cyan)', width: '14px' }}></i> +57 315 359 2437</a></li>
              <li><a href="mailto:oscaroctavio.osorio@gmail.com"><i className="fas fa-envelope" style={{ color: 'var(--cyan)', width: '14px' }}></i> Enviar email</a></li>
            </ul>
            <a href="https://wa.me/573153592437" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '18px', width: '100%', justifyContent: 'center', fontSize: '.82rem' }}>
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 · <span>Oscar Osorio</span> · Todos los derechos reservados</p>
          <div className="made-with"><i className="fas fa-code"></i> Hecho con React & pasión desde Colombia 🇨🇴</div>
        </div>
      </div>
    </footer>
  );
}
