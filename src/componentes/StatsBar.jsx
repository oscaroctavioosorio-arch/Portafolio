import React from 'react';

export default function StatsBar() {
  return (
    <section id="stats-bar">
      <div className="container">
        <div className="stats-bar-grid">
          <div className="stat-item reveal">
            <span className="stat-num" data-target="20">0</span>
            <span className="stat-label">Proyectos completados</span>
          </div>
          <div className="stat-item reveal" style={{ transitionDelay: '.1s' }}>
            <span className="stat-num" data-target="15">0</span>
            <span className="stat-label">Clientes satisfechos</span>
          </div>
          <div className="stat-item reveal" style={{ transitionDelay: '.2s' }}>
            <span className="stat-num" data-target="3">0</span>
            <span className="stat-label">Años de experiencia</span>
          </div>
          <div className="stat-item reveal" style={{ transitionDelay: '.3s' }}>
            <span className="stat-num" data-target="100" data-suffix="%">0</span>
            <span className="stat-label">Código limpio</span>
          </div>
        </div>
      </div>
    </section>
  );
}
