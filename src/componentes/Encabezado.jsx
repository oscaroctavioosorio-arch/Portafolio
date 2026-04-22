import React, { useState } from "react";

function Encabezado() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto((prev) => !prev);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="header-principal">
      <div className="contenedor-header">
        <div className="logo-container">
          <div className="logo-personal">
            <img src="/logo.png" alt="Logo de Oscar Osorio" className="logo-img" />
          </div>
          <div className="nombre-sitio">
            <span className="nombre">Oscar Osorio</span>
            <span className="profesion">Desarrollador Web</span>
          </div>
        </div>
        {/* Botón hamburguesa solo visible en móviles */}
        <button
          className="menu-hamburguesa"
          aria-label="Abrir menú"
          onClick={toggleMenu}
        >
          <span className="hamburguesa-linea"></span>
          <span className="hamburguesa-linea"></span>
          <span className="hamburguesa-linea"></span>
        </button>
        {/* Menú de navegación */}
        <nav 
          className={`nav-principal${menuAbierto ? " nav-abierto" : ""}`}
          aria-label="Navegación principal"
          role="navigation"
        >
          <a href="#inicio" className="nav-link" onClick={cerrarMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon" aria-hidden="true" focusable="false">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Inicio</span>
          </a>
          <a href="#sobremi" className="nav-link" onClick={cerrarMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon" aria-hidden="true" focusable="false">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Sobre mí</span>
          </a>
          <a href="#proyectos" className="nav-link" onClick={cerrarMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon" aria-hidden="true" focusable="false">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span>Proyectos</span>
          </a>
          <a href="#contacto" className="nav-link" onClick={cerrarMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon" aria-hidden="true" focusable="false">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>Contacto</span>
          </a>


        </nav>
      </div>
    </header>
  );
}

export default Encabezado;
