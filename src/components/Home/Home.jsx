
import { useState, useEffect } from 'react'
import Hero from '../Hero/Hero'
import Item from '../Item/Item'
import { getDestinos } from '../../data/destinos'
import './Home.css'

const Home = () => {
  const [destacados, setDestacados] = useState([])

  useEffect(() => {
    const fetchDestacados = async () => {
      const data = await getDestinos()
      setDestacados(data.slice(0, 3)) // solo los primeros 3
    }
    fetchDestacados()
  }, [])

  return (
    <div className="home">
      <Hero />
      <section className="home-destacados">
        <h2>Destinos destacados</h2>
        <div className="home-destacados-grid">
          {destacados.map((destino) => (
            <Item key={destino.id} destino={destino} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home