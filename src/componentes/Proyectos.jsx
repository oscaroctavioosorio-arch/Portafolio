import TarjetaProyecto from './TarjetaProyecto'
import { useEffect } from 'react';

function Proyectos() {
  // Función para precargar imágenes importantes
  useEffect(() => {
    const precargarImagenes = () => {
      const imagenesProyectos = [
        '/proyectos/ellasNavegan.jpg',
        '/proyectos/gratia.jpg'
      ];
      
      imagenesProyectos.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    
    // Precargar imágenes después de que los componentes principales se hayan cargado
    const timer = setTimeout(() => {
      precargarImagenes();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="proyectos">
      <div className="proyectos-encabezado">
        <h2>Proyectos Destacados</h2>
        <p className="proyectos-intro">
          <span className="destacado">Soluciones digitales</span> que transforman ideas en experiencias excepcionales. 
          Cada proyecto representa mi compromiso con la excelencia técnica y el diseño centrado en el usuario.
        </p>
      </div>
      
      <div className="lista-proyectos animacion-escalonada">
        {/* Proyecto 1: Mentoria */}
        <TarjetaProyecto
          titulo="Ellas Navegan"
          descripcion="Viajes exclusivos en barco para mujeres en San Blas, Panamá. Experiencias pensadas por y para mujeres que buscan una pausa real, aventura, autenticidad y bienestar profundo en medio del Caribe. Rutas guiadas para soltar la autoexigencia, bajar el ritmo y reconectar contigo en un entorno seguro y femenino."
          tecnologias={['React', 'CSS', 'Responsive Design']}
          enlaceDemo="https://ellasnavegan.online"
          imagenSrc="/proyectos/ellasNavegan.jpg"
          logros={[
            'Diseño visual inmersivo que transmite la esencia del viaje',
            'Experiencia optimizada para móviles',
            'Presentación clara de rutas y experiencias disponibles'
          ]}
        />

        {/* Proyecto 2: Gratia Accesorios */}
        <TarjetaProyecto
          titulo="Gratia Accesorios"
          descripcion="Tienda online de joyería con catálogo de productos, diseño atractivo y responsivo, ideal para emprendedores que buscan establecer una presencia online profesional y aumentar sus ventas."
          tecnologias={['React', 'CSS', 'E-commerce', 'UX/UI']}
          enlaceDemo="https://gratia-accesorios.netlify.app/"
          imagenSrc="/proyectos/gratia.jpg"
          logros={[
            'Interfaz de usuario intuitiva para explorar productos',
            'Diseño responsive optimizado para móviles',
            'Experiencia de compra simplificada'
          ]}
        />
      </div>
      
      <div className="proyectos-cta">
        <p>¿Tienes un proyecto en mente? Conversemos sobre cómo puedo ayudarte a hacerlo realidad.</p>
        <a href="https://wa.me/573153592437" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
          Contactarme por WhatsApp
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Proyectos
