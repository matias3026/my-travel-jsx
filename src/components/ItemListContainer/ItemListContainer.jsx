// src/components/ItemListContainer/ItemListContainer.jsx
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getDestinos } from '../../data/destinos'
import './ItemListContainer.css'

const ItemListContainer = () => {
  const [destinos, setDestinos] = useState([])

  useEffect(() => {
    const fetchDestinos = async () => {
      const data = await getDestinos()
      setDestinos(data)
    }
    fetchDestinos()
  }, [])

  return (
    <div className="item-list-container">
      <h2>Nuestros destinos</h2>
      <ItemList destinos={destinos} />
    </div>
  )
}

export default ItemListContainer