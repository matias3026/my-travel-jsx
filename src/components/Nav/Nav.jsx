// src/components/Nav/Nav.jsx
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/destinos">Destinos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Nav