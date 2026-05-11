import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="exp-grid">
          <div>
            <div className="section-label reveal">Trayectoria</div>
            <h2 className="section-title reveal">Experiencia & <span>Educación</span></h2>
            <p className="section-desc reveal" style={{ marginBottom: '0' }}>Construyendo expertise a través de proyectos reales y formación constante.</p>
          </div>
          <div className="timeline reveal" style={{ transitionDelay: '.2s' }}>
            <div className="timeline-item">
              <div className="tl-dot"></div>
              <div className="tl-date">2023 — Presente</div>
              <div className="tl-card">
                <h3>Desarrollador Web</h3>
                <div className="company"><i className="fas fa-building" style={{ marginRight: '6px' }}></i>AMA Studio — Barranquilla, Colombia</div>
                <p>Desarrollo de aplicaciones web y landing pages para clientes del estudio. Soluciones digitales que combinan diseño de alto impacto con funcionalidad robusta.</p>
                <div className="tl-tech"><span className="tag">React</span><span className="tag">JavaScript</span><span className="tag">CSS3</span><span className="tag">Git</span></div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="tl-dot p"></div>
              <div className="tl-date">2022 — 2023</div>
              <div className="tl-card">
                <h3>Frontend Developer Freelance</h3>
                <div className="company" style={{ color: 'var(--purple)' }}><i className="fas fa-laptop" style={{ marginRight: '6px' }}></i>Proyectos independientes</div>
                <p>Desarrollo de sitios web y aplicaciones para clientes de diversas industrias. Especialización en React y creación de interfaces modernas.</p>
                <div className="tl-tech"><span className="tag">React</span><span className="tag">HTML/CSS</span><span className="tag">JavaScript</span></div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="tl-dot g"></div>
              <div className="tl-date">2020 — 2022</div>
              <div className="tl-card">
                <h3>Formación en Desarrollo Web</h3>
                <div className="company" style={{ color: 'var(--green)' }}><i className="fas fa-graduation-cap" style={{ marginRight: '6px' }}></i>Cursos & Bootcamps</div>
                <p>Formación intensiva en HTML5, CSS3, JavaScript y React. Proyectos prácticos que consolidaron las bases del desarrollo web moderno.</p>
                <div className="tl-tech"><span className="tag">HTML5</span><span className="tag">CSS3</span><span className="tag">JavaScript</span><span className="tag">React</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
