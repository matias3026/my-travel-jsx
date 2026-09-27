
import { Link } from 'react-router-dom'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Descubrí tu próximo destino</h1>
        <p>Los mejores paquetes de viaje, a un click de distancia.</p>
        <Link to="/destinos">
          <button className="hero-boton">Ver destinos</button>
        </Link>
        <AudioPlayer />
      </div>
    </section>
  )
}

export default Hero