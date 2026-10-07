import React, { useState } from 'react'
import './Nav.css'
import logo from '../assets/logo.png'

export default function Nav() {
  const [abierto, setAbierto] = useState(false)

  const cerrar = () => setAbierto(false)

  return (
    <nav className="nav">
        <div className='nav-logo'>
            <a className='logo' href="/" onClick={cerrar}><img src={logo} alt="PairCode" /></a>
        </div>

        {/* Botón hamburguesa: solo se ve en móvil */}
        <button
          type='button'
          className={`nav-toggle ${abierto ? 'abierto' : ''}`}
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          aria-controls='menu-principal'
          onClick={() => setAbierto(!abierto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div id='menu-principal' className={`nav-link ${abierto ? 'abierto' : ''}`}>
            <a href="#inicio" onClick={cerrar}>Inicio</a>
            <a href="#nosotros" onClick={cerrar}>Nosotros</a>
            <a href="#tecnologias" onClick={cerrar}>Tecnologías</a>
            <a href="#contacto" onClick={cerrar}>Contacto</a>
        </div>
    </nav>
  );
}