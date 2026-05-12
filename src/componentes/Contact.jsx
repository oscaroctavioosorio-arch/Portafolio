import React from 'react';

function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  const name = e.target.querySelector('input[type=text]').value;
  const msg = e.target.querySelector('textarea').value;
  btn.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
  btn.style.background = 'var(--green)';
  btn.disabled = true;
  const wa = `https://wa.me/573153592437?text=${encodeURIComponent(`Hola Oscar! Soy ${name} y me puse en contacto desde tu portafolio. ${msg}`)}`;
  setTimeout(() => window.open(wa, '_blank'), 600);
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar mensaje';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3200);
}

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal">
            <div className="section-label">Contacto</div>
            <h2 className="contact-info-title">¿Listo para <span>empezar</span>?</h2>
            <p style={{ color: 'var(--text-2)', lineHeight: '1.8', marginBottom: '36px' }}>
              Tienes un proyecto en mente o quieres explorar posibilidades — estoy aquí. Respondo en menos de 24 horas.
            </p>
            {/* Redes sociales — descomentar cuando estén listos los perfiles
            <div className="contact-socials">
              <a href="https://github.com/oscaroctavioosorio-arch" target="_blank" rel="noopener noreferrer" className="cs-btn"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/oscar-osorio" target="_blank" rel="noopener noreferrer" className="cs-btn"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://wa.me/573153592437" target="_blank" rel="noopener noreferrer" className="cs-btn"><i className="fab fa-whatsapp"></i></a>
              <a href="mailto:oscaroctavio.osorio@gmail.com" className="cs-btn"><i className="fas fa-envelope"></i></a>
            </div>
            */}
            <div className="contact-items">
              <div className="contact-item">
                <div className="ci-icon"><i className="fas fa-envelope"></i></div>
                <div className="ci-text"><strong>Email</strong><a href="mailto:oscaroctavio.osorio@gmail.com">oscaroctavio.osorio@gmail.com</a></div>
              </div>
              <div className="contact-item">
                <div className="ci-icon"><i className="fab fa-whatsapp"></i></div>
                <div className="ci-text"><strong>WhatsApp</strong><a href="https://wa.me/573153592437">+57 315 359 2437</a></div>
              </div>
              <div className="contact-item">
                <div className="ci-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="ci-text"><strong>Ubicación</strong><span>Barranquilla, Colombia 🇨🇴</span></div>
              </div>
              <div className="contact-item">
                <div className="ci-icon" style={{ background: 'var(--green-dim)', borderColor: 'rgba(0,255,157,.18)', color: 'var(--green)' }}>
                  <i className="fas fa-circle"></i>
                </div>
                <div className="ci-text"><strong>Estado</strong><span style={{ color: 'var(--green)' }}>✓ Disponible para proyectos</span></div>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '.15s' }}>
            <div className="contact-form-wrap">
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.08rem', fontWeight: '700', marginBottom: '26px' }}>Envíame un mensaje</h3>
              <form onSubmit={handleForm}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nombre *</label>
                    <input type="text" placeholder="Tu nombre" required
                      onInvalid={e => e.target.setCustomValidity('Por favor ingresa tu nombre')}
                      onInput={e => e.target.setCustomValidity('')} />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" placeholder="tu@email.com" required
                      onInvalid={e => e.target.setCustomValidity(e.target.validity.valueMissing ? 'Por favor ingresa tu correo' : 'Ingresa un correo electrónico válido')}
                      onInput={e => { e.target.setCustomValidity(''); if (e.target.validity.valueMissing) e.target.setCustomValidity('Por favor ingresa tu correo'); else if (e.target.validity.typeMismatch) e.target.setCustomValidity('Ingresa un correo electrónico válido'); }} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Tipo de proyecto *</label>
                  <select required
                    onInvalid={e => e.target.setCustomValidity('Por favor selecciona un tipo de proyecto')}
                    onChange={e => e.target.setCustomValidity('')}>
                    <option value="">Selecciona...</option>
                    <option>Landing Page / Portafolio</option>
                    <option>Tienda Online / E-commerce</option>
                    <option>Aplicación Web</option>
                    <option>Consultoría Técnica</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Presupuesto *</label>
                  <select required
                    onInvalid={e => e.target.setCustomValidity('Por favor selecciona un rango de presupuesto')}
                    onChange={e => e.target.setCustomValidity('')}>
                    <option value="">Selecciona un rango...</option>
                    <option>$200 - $500 USD</option>
                    <option>$500 - $1,500 USD</option>
                    <option>$1,500 - $3,000 USD</option>
                    <option>$3,000+ USD</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Mensaje *</label>
                  <textarea placeholder="Cuéntame sobre tu proyecto..." required
                    onInvalid={e => e.target.setCustomValidity('Por favor escribe tu mensaje')}
                    onInput={e => e.target.setCustomValidity('')}></textarea>
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  <i className="fas fa-paper-plane"></i> Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
