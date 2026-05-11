import React from 'react';

const steps = [
  { num: '01', icon: '🔍', title: 'Análisis', desc: 'Entiendo a fondo tus necesidades, objetivos y usuarios para definir el alcance exacto del proyecto.' },
  { num: '02', icon: '🎨', title: 'Diseño', desc: 'Creo wireframes y prototipos visuales que garantizan una UX excepcional antes de escribir código.' },
  { num: '03', icon: '⚙️', title: 'Desarrollo', desc: 'Implemento la solución con código limpio, escalable y siguiendo las mejores prácticas de la industria.' },
  { num: '04', icon: '🚀', title: 'Entrega', desc: 'Deployment, testing final y entrega con soporte. Tu proyecto listo y optimizado para escalar.' },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '65px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Metodología</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Cómo <span>trabajo</span></h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Un proceso probado para entregar proyectos de calidad, a tiempo y sin sorpresas.</p>
        </div>
        <div className="process-grid">
          {steps.map((s, i) => (
            <div key={s.num} className="process-step reveal" style={i > 0 ? { transitionDelay: `${i * .1}s` } : {}}>
              <div className="process-num">{s.num}</div>
              <div className="process-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
