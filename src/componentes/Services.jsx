import React from 'react';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Lo que ofrezco</div>
          <h2 className="section-title">Mis <span>servicios</span></h2>
          <p className="section-desc">Soluciones completas de desarrollo web adaptadas a las necesidades reales de tu negocio.</p>
        </div>
        <div className="services-grid">
          <div className="service-card reveal">
            <div className="svc-glow"></div>
            <div className="svc-icon"><i className="fas fa-laptop-code"></i></div>
            <h3>Desarrollo Frontend</h3>
            <p>Interfaces modernas, rápidas y accesibles. Desde landing pages hasta dashboards complejos.</p>
            <ul className="svc-features">
              <li><i className="fas fa-check"></i>SPAs con React.js</li>
              <li><i className="fas fa-check"></i>Responsive design pixel perfect</li>
              <li><i className="fas fa-check"></i>Optimización de performance</li>
              <li><i className="fas fa-check"></i>Animaciones e interacciones avanzadas</li>
              <li><i className="fas fa-check"></i>Accesibilidad WCAG 2.1</li>
            </ul>
          </div>
          <div className="service-card featured reveal" style={{ transitionDelay: '.1s' }}>
            <div className="svc-glow"></div>
            <span className="svc-badge">★ MÁS POPULAR</span>
            <div className="svc-icon"><i className="fab fa-react"></i></div>
            <h3>Especialista React</h3>
            <p>Aplicaciones web completas con React, Context API, Redux y el ecosistema moderno de JavaScript.</p>
            <ul className="svc-features">
              <li><i className="fas fa-check"></i>Arquitectura de componentes escalable</li>
              <li><i className="fas fa-check"></i>State management avanzado</li>
              <li><i className="fas fa-check"></i>Integración con APIs REST y GraphQL</li>
              <li><i className="fas fa-check"></i>Testing con Jest</li>
              <li><i className="fas fa-check"></i>Code splitting y lazy loading</li>
            </ul>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '.2s' }}>
            <div className="svc-glow"></div>
            <div className="svc-icon"><i className="fas fa-globe"></i></div>
            <h3>Soluciones Web</h3>
            <p>Desde la idea hasta el lanzamiento. E-commerce, portafolios y aplicaciones a medida.</p>
            <ul className="svc-features">
              <li><i className="fas fa-check"></i>Tiendas online completas</li>
              <li><i className="fas fa-check"></i>Landing pages de alta conversión</li>
              <li><i className="fas fa-check"></i>Portafolios profesionales</li>
              <li><i className="fas fa-check"></i>Integración de pasarelas de pago</li>
              <li><i className="fas fa-check"></i>SEO técnico y velocidad</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
