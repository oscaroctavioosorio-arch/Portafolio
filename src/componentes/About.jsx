import React from 'react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-photo-col reveal">
            <div className="about-corner tl"></div>
            <div className="about-corner br"></div>
            <div className="about-img-wrap">
              <img
                src="/oscar-2.jpg"
                alt="Oscar Osorio"
                onError={e => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }}
              />
              <div className="about-img-placeholder" style={{ display: 'none' }}><span>OO</span></div>
            </div>
            <div className="exp-badge">
              <div className="num">3+</div>
              <span className="lbl">Años de<br />experiencia</span>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '.15s' }}>
            <div className="section-label">Acerca de mí</div>
            <h2 className="section-title">Desarrollador Web <span>apasionado</span></h2>
            <p style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '14px' }}>
              Por crear soluciones digitales que combinan la excelencia técnica con una experiencia de usuario excepcional. Mi trayectoria me ha permitido desarrollar una visión integral del desarrollo web, cuidando cada detalle para ofrecer experiencias modernas y funcionales.
            </p>
            <p style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '30px' }}>
              Especializado en <strong style={{ color: 'var(--cyan)' }}>React</strong> y el ecosistema JavaScript moderno. Construyo aplicaciones que no solo lucen impresionantes — resuelven problemas reales y generan resultados tangibles.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '34px' }}>
              <a href="/cv-oscar-osorio.pdf" download className="btn btn-primary">
                <i className="fas fa-download"></i> Descargar CV
              </a>
              <a href="#contact" className="btn btn-outline">
                <i className="fas fa-handshake"></i> Trabajemos juntos
              </a>
            </div>
            <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '.97rem', fontWeight: '600', marginBottom: '18px' }}>Mi filosofía de trabajo</h3>
            <div className="philosophy-grid">
              <div className="philosophy-card">
                <span className="phi-icon">🔥</span>
                <h4>Aprendizaje continuo</h4>
                <p>Siempre actualizado con las últimas tecnologías y tendencias del desarrollo.</p>
              </div>
              <div className="philosophy-card">
                <span className="phi-icon">🛠️</span>
                <h4>Código limpio</h4>
                <p>Priorizo legibilidad y mantenibilidad en cada línea que escribo.</p>
              </div>
              <div className="philosophy-card">
                <span className="phi-icon">👥</span>
                <h4>Colaboración efectiva</h4>
                <p>Trabajo en equipos multidisciplinarios para alcanzar objetivos comunes.</p>
              </div>
              <div className="philosophy-card">
                <span className="phi-icon">💡</span>
                <h4>Orientación a soluciones</h4>
                <p>Resuelvo problemas reales con soluciones prácticas y efectivas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
