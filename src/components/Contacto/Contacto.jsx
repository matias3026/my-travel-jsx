// src/components/Contacto/Contacto.jsx
import { useState } from 'react'
import './Contacto.css'

const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Datos del formulario:', formulario)
    setEnviado(true)
  }

  return (
    <div className="contacto">
      <h2>Contactanos</h2>
      <p>¿Tenés dudas sobre algún destino? Escribinos.</p>

      {enviado ? (
        <p className="contacto-exito">¡Gracias por tu mensaje! Te vamos a responder a la brevedad.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contacto-form">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            value={formulario.mensaje}
            onChange={handleChange}
            required
          />

          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  )
}

export default Contacto