
function Contacto() {
  return (
    <section id="contacto">
      <h2>Contacto</h2>
      
      <div className="contacto-informacion">
        <div className="contacto-item">
          <div className="contacto-icono">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div className="contacto-detalle">
            <a href="mailto:oscaroctavio.osorio@gmail.com" className="email-btn">Enviar correo</a>
          </div>
        </div>
        
        <div className="contacto-item">
          <div className="contacto-icono">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div className="contacto-detalle">
            <a href="tel:+573153592437" className="telefono-btn">+57 315 359 2437</a>
          </div>
        </div>
        
        <div className="contacto-item">
          <div className="contacto-icono">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g>
    <circle fill="#25D366" cx="12" cy="12" r="12"/>
    <path fill="#fff" d="M17.472 14.339c-.355-.177-2.1-1.034-2.424-1.153-.325-.118-.561-.177-.798.178-.237.355-.915 1.153-1.122 1.39-.207.237-.414.266-.769.089-.355-.178-1.5-.553-2.858-1.763-1.056-.944-1.77-2.108-1.98-2.463-.207-.355-.022-.546.155-.723.159-.158.355-.414.532-.62.178-.207.237-.355.355-.592.118-.237.06-.444-.03-.621-.089-.177-.798-1.923-1.093-2.635-.288-.692-.582-.597-.798-.608-.207-.009-.444-.011-.681-.011-.237 0-.62.089-.945.444-.325.355-1.24 1.211-1.24 2.951 0 1.74 1.271 3.422 1.448 3.659.177.237 2.503 3.824 6.063 5.216.849.292 1.51.466 2.025.596.851.203 1.626.174 2.239.106.683-.076 2.1-.859 2.398-1.688.296-.83.296-1.54.207-1.688-.089-.148-.325-.237-.68-.414z"/>
    <path fill="#fff" d="M12 2.5c-5.24 0-9.5 4.26-9.5 9.5 0 2.01.62 3.88 1.79 5.47L2.5 21.5l4.53-1.79A9.47 9.47 0 0 0 12 21.5c5.24 0 9.5-4.26 9.5-9.5S17.24 2.5 12 2.5zm0 17.5c-1.65 0-3.22-.5-4.56-1.42l-.32-.21-2.69 1.06 1.03-2.71-.21-.32A7.47 7.47 0 0 1 4.5 12c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z"/>
  </g>
</svg>
</div>
          <div className="contacto-detalle">
            <a href="https://wa.me/573153592437" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">Enviar mensaje</a>
          </div>
        </div>
      </div>
      
    

    </section>
  )
}

export default Contacto
