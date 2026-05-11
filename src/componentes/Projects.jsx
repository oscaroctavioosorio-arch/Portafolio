import React, { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {
    const btns = document.querySelectorAll('.filter-btn');
    const handler = (btn) => () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(c => {
        const show = f === 'all' || (c.dataset.category && c.dataset.category.includes(f));
        c.style.opacity = show ? '1' : '0.2';
        c.style.pointerEvents = show ? '' : 'none';
      });
    };
    btns.forEach(btn => btn.addEventListener('click', handler(btn)));

    const cards = document.querySelectorAll('.project-card');
    const moveHandlers = [];
    cards.forEach(card => {
      const onMove = e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `translateY(-8px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
      };
      const onLeave = () => { card.style.transform = ''; };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      moveHandlers.push({ card, onMove, onLeave });
    });

    return () => {
      moveHandlers.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Portafolio</div>
          <h2 className="section-title">Proyectos <span>destacados</span></h2>
          <p className="section-desc">Soluciones digitales que transforman ideas en experiencias excepcionales. Cada proyecto refleja mi compromiso con la excelencia técnica.</p>
        </div>
        <div className="project-filters reveal">
          <button className="filter-btn active" data-filter="all">Todos</button>
          <button className="filter-btn" data-filter="react">React</button>
          <button className="filter-btn" data-filter="ecommerce">E-commerce</button>
          <button className="filter-btn" data-filter="landing">Landing</button>
        </div>
        <div className="projects-grid">

          <div className="project-card reveal" data-category="react landing">
            <div className="project-img">
              <img
                src="/ellas-navegan.jpg"
                alt="Ellas Navegan"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .5s ease' }}
                onError={e => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }}
              />
              <div className="proj-placeholder proj-ellas" style={{ display: 'none' }}>
                <div className="ellas-wave"></div>
                <div className="sun"></div>
                <div className="ellas-brand">ELLAS NAVEGAN<span>PANAMÁ · SAN BLAS</span></div>
              </div>
              <div className="project-overlay">
                <a href="https://ellasnavegan.online/" target="_blank" rel="noopener noreferrer" className="pov-btn"><i className="fas fa-external-link-alt"></i></a>
              </div>
              <span className="proj-num">01</span>
            </div>
            <div className="project-body">
              <div className="proj-tags"><span className="tag">React</span><span className="tag">CSS</span><span className="tag">Responsive</span></div>
              <h3>Ellas Navegan</h3>
              <p>Viajes exclusivos en barco para mujeres en San Blas, Panamá. Experiencias pensadas por y para mujeres que buscan aventura, autenticidad y bienestar en el Caribe.</p>
              <ul className="proj-results">
                <li><i className="fas fa-star"></i> Diseño visual inmersivo que transmite la esencia del viaje</li>
                <li><i className="fas fa-star"></i> Experiencia optimizada para dispositivos móviles</li>
                <li><i className="fas fa-star"></i> Presentación clara de rutas y experiencias disponibles</li>
              </ul>
              <div className="proj-footer">
                <div className="proj-tags" style={{ margin: '0' }}>
                  <span className="tag" style={{ fontSize: '.68rem' }}>React</span>
                  <span className="tag" style={{ fontSize: '.68rem' }}>CSS Modules</span>
                </div>
                <a href="https://ellasnavegan.online/" target="_blank" rel="noopener noreferrer" className="proj-link">Ver proyecto <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div className="project-card reveal" data-category="react ecommerce" style={{ transitionDelay: '.1s' }}>
            <div className="project-img">
              <img
                src="/gratia.jpg"
                alt="Gratia Accesorios"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .5s ease' }}
                onError={e => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }}
              />
              <div className="proj-placeholder proj-gratia" style={{ display: 'none' }}>
                <div className="gratia-ring"></div>
                <div className="gratia-dot gd1"></div>
                <div className="gratia-dot gd2"></div>
                <div className="gratia-dot gd3"></div>
                <div className="gratia-brand">
                  <div className="g-title">GRATIA</div>
                  <div className="g-sub">Jewelry &amp; Accessories</div>
                </div>
              </div>
              <div className="project-overlay">
                <a href="https://gratia-accesorios.netlify.app/" target="_blank" rel="noopener noreferrer" className="pov-btn"><i className="fas fa-external-link-alt"></i></a>
              </div>
              <span className="proj-num">02</span>
            </div>
            <div className="project-body">
              <div className="proj-tags"><span className="tag">React</span><span className="tag">E-commerce</span><span className="tag">UX/UI</span></div>
              <h3>Gratia Accesorios</h3>
              <p>Tienda online de joyería con catálogo de productos, diseño atractivo y responsivo. Presencia online profesional para emprendedoras que quieren aumentar sus ventas.</p>
              <ul className="proj-results">
                <li><i className="fas fa-star"></i> Interfaz intuitiva para explorar el catálogo</li>
                <li><i className="fas fa-star"></i> Diseño responsive optimizado para móviles</li>
                <li><i className="fas fa-star"></i> Experiencia de compra simplificada y fluida</li>
              </ul>
              <div className="proj-footer">
                <div className="proj-tags" style={{ margin: '0' }}>
                  <span className="tag" style={{ fontSize: '.68rem' }}>React</span>
                  <span className="tag" style={{ fontSize: '.68rem' }}>E-commerce</span>
                </div>
                <a href="https://gratia-accesorios.netlify.app/" target="_blank" rel="noopener noreferrer" className="proj-link">Ver proyecto <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div className="project-card reveal" style={{ transitionDelay: '.2s', gridColumn: '1/-1' }}>
            <div className="project-img proj-tuproyecto" style={{ aspectRatio: 'auto', minHeight: '180px' }}>
              <div className="tuproyecto-inner">
                <div className="tuproyecto-code">// próximo proyecto</div>
                <div className="tuproyecto-title">TU PROYECTO<span className="tuproyecto-cursor">_</span></div>
                <div className="tuproyecto-line"></div>
                <div className="tuproyecto-sub">¿Tienes una idea? Construyámosla juntos.</div>
              </div>
            </div>
            <div className="project-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h3 style={{ marginBottom: '6px' }}>¿Tienes un proyecto en mente?</h3>
                <p style={{ marginBottom: '0', maxWidth: '500px' }}>Conversemos sobre cómo puedo ayudarte a hacerlo realidad. Respondo en menos de 24 horas.</p>
              </div>
              <a href="https://wa.me/573153592437" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <i className="fab fa-whatsapp"></i> Contactar por WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
