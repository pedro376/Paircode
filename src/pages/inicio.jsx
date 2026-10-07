import React, { useState } from 'react'

import '../components/inicio.css';
import imgl from '../assets/imgll.png'
import img2 from '../assets/pc.png'

//img tecnologias
import python from '../assets/python.png'
import react from '../assets/react.svg'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import sql from '../assets/sql.png'
import php from '../assets/php.svg'


const FORM_ENDPOINT = 'https://formspree.io/f/TU_ID_AQUI'

const FORM_INICIAL = { nombre: '', correo: '', telefono: '', mensaje: '', web: '' }

export default function Inicio() {
  const [datos, setDatos] = useState(FORM_INICIAL)
  const [estado, setEstado] = useState('idle') // idle | enviando | ok | error

  const irAContacto = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  const manejarCambio = (e) => {
    const { name, value } = e.target
    setDatos((prev) => ({ ...prev, [name]: value }))
  }

  const enviar = async (e) => {
    e.preventDefault()

    // Campo trampa anti-spam: los humanos no lo ven, los bots sí lo llenan
    if (datos.web) return

    setEstado('enviando')
    try {
      const respuesta = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nombre: datos.nombre,
          correo: datos.correo,
          telefono: datos.telefono,
          mensaje: datos.mensaje,
        }),
      })

      if (!respuesta.ok) throw new Error('Error al enviar')

      setEstado('ok')
      setDatos(FORM_INICIAL)
    } catch (err) {
      setEstado('error')
    }
  }

  return (
    <article>
      {/* ---------- INICIO ---------- */}
      <section className='inicio' id='inicio'>
        <div className='info'>
          <h1>Soluciones web que impulsan tu negocio</h1>
          <h2>Sitios web y aplicaciones web modernas, seguros y personalizados</h2>
          <div className='btn-Contacto'>
            <button type='button' onClick={irAContacto}>
              Contáctanos
            </button>
          </div>
        </div>
        <div className='ar-img'>
          <img src={imgl} alt='Ilustración de desarrollo web' />
        </div>
      </section>

      {/* ---------- NOSOTROS ---------- */}
      <section className='nosotros' id='nosotros'>
        <div className='titulo'>
          <h1>Nosotros</h1>
        </div>

        <div className='ini'>
          <div className='loll'>
            <h2>
              Somos un equipo de desarrolladores enfocados en la creación de sitios y aplicaciones web. Trabajamos
              para transformar ideas en soluciones digitales modernas, funcionales y adaptadas a las necesidades de
              cada proyecto.
            </h2>
            <h2>
              Combinamos diseño, programación y trabajo en equipo para desarrollar productos web que ofrezcan una
              buena experiencia y ayuden a nuestros clientes a alcanzar sus objetivos.
            </h2>
          </div>
          <div className='lol'>
            <img src={img2} alt='Computadora con un sitio web' />
          </div>
        </div>

        <div className='div-sesarollo'>
          <div>
            <h2>Desarrollo Web</h2>
            <p>Creamos sitios web modernos, profesionales y adaptables a cualquier dispositivo.</p>
          </div>

          <div>
            <h2>Aplicaciones Web</h2>
            <p>Desarrollamos aplicaciones personalizadas para cubrir las necesidades específicas de cada proyecto.</p>
          </div>
        </div>
      </section>

      {/* ---------- TECNOLOGÍAS ---------- */}
      <section className='tecnologias' id='tecnologias'>
        <div className='titulo'>
          <h1>Tecnologias</h1>
        </div>
        <div className='et'>
            <div className='tec'>
            <h2>Frontend</h2>
            <div className='img'>
                <div><img src={html} alt='HTML' /></div>
                <div><img src={css} alt='CSS' /></div>
                <div><img src={js} alt='JavaScript' /></div>
            </div>
            </div>

            <div className='tec'>
            <h2>Backend</h2>
            <div className='img'>
                <div><img src={python} alt='Python' /></div>
                <div><img src={php} alt='PHP' /></div>
            </div>
            </div>

            <div className='tec'>
            <h2>Framework</h2>
            <div className='img'>
                <div><img src={react} alt='React' /></div>
            </div>
            </div>

            <div className='tec'>
            <h2>Base de datos</h2>
            <div className='img'>
                <div><img src={sql} alt='SQL' /></div>
            </div>
            </div>
        </div>
      </section>

      {/* ---------- CONTACTO ---------- */}
      <section className='contacto' id='contacto'>
        <div className='contacto-texto'>
          <h1>Contáctanos</h1>
          <p>
            Cuéntanos qué necesitas y te responderemos con una propuesta. Solo toma un par de minutos llenar el
            formulario.
          </p>
        </div>

        <form className='form-contacto' onSubmit={enviar} noValidate={false}>
          <div className='campo'>
            <label htmlFor='nombre'>Nombre</label>
            <input
              id='nombre'
              name='nombre'
              type='text'
              autoComplete='name'
              value={datos.nombre}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className='campo'>
            <label htmlFor='correo'>Correo electrónico</label>
            <input
              id='correo'
              name='correo'
              type='email'
              autoComplete='email'
              value={datos.correo}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className='campo'>
            <label htmlFor='telefono'>Teléfono (opcional)</label>
            <input
              id='telefono'
              name='telefono'
              type='tel'
              autoComplete='tel'
              value={datos.telefono}
              onChange={manejarCambio}
            />
          </div>

          <div className='campo'>
            <label htmlFor='mensaje'>¿En qué podemos ayudarte?</label>
            <textarea
              id='mensaje'
              name='mensaje'
              rows='5'
              value={datos.mensaje}
              onChange={manejarCambio}
              required
            />
          </div>

          {/* Campo trampa anti-spam (oculto con CSS) */}
          <div className='campo-trampa' aria-hidden='true'>
            <label htmlFor='web'>No llenar este campo</label>
            <input id='web' name='web' type='text' tabIndex='-1' autoComplete='off' value={datos.web} onChange={manejarCambio} />
          </div>

          <button type='submit' className='btn-enviar' disabled={estado === 'enviando'}>
            {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          <p className={`estado-form ${estado}`} role='status' aria-live='polite'>
            {estado === 'ok' && 'Mensaje enviado. Te responderemos pronto.'}
            {estado === 'error' && 'No se pudo enviar el mensaje. Revisa tu conexión e inténtalo de nuevo.'}
          </p>
        </form>
      </section>

    </article>
  )
}