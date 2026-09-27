// src/components/ItemList/ItemList.jsx
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ destinos }) => {
  return (
    <div className="item-list">
      {destinos.map((destino) => (
        <Item key={destino.id} destino={destino} />
      ))}
    </div>
  )
}

export default ItemList