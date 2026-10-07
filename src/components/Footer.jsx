import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-contenido'>
        <div className='footer-marca'>
          <h3>PairCode</h3>
          <p>Sitios y aplicaciones web a la medida de tu negocio.</p>
        </div>

        <nav className='footer-nav' aria-label='Navegación del pie de página'>
          <a href='#inicio'>Inicio</a>
          <a href='#nosotros'>Nosotros</a>
          <a href='#tecnologias'>Tecnologías</a>
          <a href='#contacto'>Contacto</a>
        </nav>

        <div className='footer-datos'>
          <a href='mailto:correo@tuempresa.com'>correo@tuempresa.com</a>
          <a href='tel:+520000000000'>+52 000 000 0000</a>
        </div>
      </div>

      <p className='footer-copy'>© {new Date().getFullYear()} PairCode. Todos los derechos reservados.</p>
    </footer>
  )
}
