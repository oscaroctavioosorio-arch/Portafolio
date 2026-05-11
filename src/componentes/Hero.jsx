import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const twRef = useRef(null);

  useEffect(() => {
    const roles = ['Desarrollador Web', 'React Specialist', 'Frontend Engineer', 'UI/UX Developer'];
    let ri = 0, ci = 0, del = false;
    const el = twRef.current;
    if (!el) return;
    let timeout;

    function type() {
      const r = roles[ri];
      if (!del) {
        el.textContent = r.slice(0, ci + 1);
        ci++;
        if (ci === r.length) { del = true; timeout = setTimeout(type, 1900); return; }
      } else {
        el.textContent = r.slice(0, ci - 1);
        ci--;
        if (ci === 0) { del = false; ri = (ri + 1) % roles.length; }
      }
      timeout = setTimeout(type, del ? 55 : 100);
    }
    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero">
      <div className="hero-orb ho-1"></div>
      <div className="hero-orb ho-2"></div>
      <div className="sparkle sp-1"></div>
      <div className="sparkle sp-2"></div>
      <div className="sparkle sp-3"></div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot-pulse"></span>
              Disponible para nuevos proyectos
            </div>
            <div className="hero-greeting">
              <i className="fas fa-terminal"></i> Hola, soy
            </div>
            <h1 className="hero-name">
              Oscar<br />
              <span className="name-line2">Osorio</span>
            </h1>
            <div className="hero-typewriter">
              <span ref={twRef}></span><span className="cursor-blink">|</span>
            </div>
            <p className="hero-desc">
              Transformo ideas en experiencias digitales excepcionales a través de código limpio y arquitecturas sólidas. Especializado en <strong>React</strong> — construyo soluciones que no solo lucen increíbles, sino que <strong>funcionan a la perfección</strong>.
            </p>
            <ul className="hero-perks">
              <li><i className="fas fa-check-circle"></i> Optimizo procesos y aumento la productividad del equipo</li>
              <li><i className="fas fa-check-circle"></i> Diseño experiencias de usuario intuitivas y atractivas</li>
              <li><i className="fas fa-check-circle"></i> Construyo soluciones que escalan con tu negocio</li>
              <li><i className="fas fa-check-circle"></i> Integro las últimas tecnologías y mejores prácticas</li>
            </ul>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary"><i className="fas fa-rocket"></i> Ver proyectos</a>
              <a href="#contact" className="btn btn-outline"><i className="fas fa-comment-dots"></i> Hablemos</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/oscaroctavioosorio-arch" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/oscar-osorio" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://wa.me/573153592437" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
              <a href="mailto:oscaroctavio.osorio@gmail.com"><i className="fas fa-envelope"></i></a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="hero-photo-ring">
              <div className="ring-spin"></div>
              <div className="ring-img">
                <img
                  src="/oscar-1.jpg"
                  alt="Oscar Osorio"
                  onError={e => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }}
                />
                <div className="photo-fallback" style={{ display: 'none' }}><span>OO</span></div>
              </div>
              <div className="hero-card hc-top">
                <div className="hc-icon react"><i className="fab fa-react"></i></div>
                <div className="hc-label">React Specialist</div>
                <div className="hc-sub">Frontend Expert</div>
              </div>
              <div className="hero-card hc-bottom">
                <div className="hc-icon code"><i className="fas fa-code"></i></div>
                <div className="hc-label">Clean Code</div>
                <div className="hc-sub">Best Practices ✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#stats-bar" className="hero-scroll">
        SCROLL
        <div className="scroll-line"></div>
      </a>
    </section>
  );
}
