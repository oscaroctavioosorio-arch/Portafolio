import React, { useState, useEffect } from 'react';

export default function WhatsAppFloat() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;
    const obs = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { threshold: 0.1 });
    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <a
      href="https://wa.me/573153592437"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}
