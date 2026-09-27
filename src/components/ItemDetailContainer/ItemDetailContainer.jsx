// src/components/ItemDetailContainer/ItemDetailContainer.jsx
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getDestinoPorId } from '../../data/destinos'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [destino, setDestino] = useState(null)

  useEffect(() => {
    const fetchDestino = async () => {
      const data = await getDestinoPorId(id)
      setDestino(data)
    }
    fetchDestino()
  }, [id])

  if (!destino) return <p className="cargando">Cargando destino...</p>

  return (
    <div className="item-detail-container">
      <ItemDetail destino={destino} />
    </div>
  )
}

export default ItemDetailContainer