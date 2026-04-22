
function PiePagina() {
  return (
    <footer>
      <div className="footer-contenido">
        <div className="footer-seccion">
          <div className="footer-logo-container">
            <div className="footer-logo">
              <img src="/logo.png" alt="Logo de Oscar Osorio" className="footer-logo-img" />
            </div>
            <h3>Oscar Osorio</h3>
          </div>
          <p className="footer-descripcion">Desarrollador Web especializado en crear experiencias digitales excepcionales.</p>
        </div>

        <div className="footer-seccion">
          <h3>Enlaces rápidos</h3>
          <nav className="footer-nav">
            <a href="#inicio">Inicio</a>
            <a href="#sobremi">Sobre mí</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>

        <div className="footer-seccion">
          <h3>Contacto</h3>
          <p className="footer-contacto">oscaroctavio.osorio@gmail.com</p>
          <p className="footer-contacto">+57 315 359 2437</p>
        </div>


      </div>

      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} | Todos los derechos reservados | Oscar Osorio</p>
      </div>
    </footer>
  )
}
  
  export default PiePagina
  