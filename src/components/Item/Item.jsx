// src/components/Item/Item.jsx
import './Item.css'

const Item = ({ destino }) => {
  return (
    <div className="item">
      <img src={destino.imagen} alt={destino.nombre} />
      <h3>{destino.nombre}</h3>
      <p>{destino.descripcion}</p>
      <p className="item-precio">USD {destino.precio}</p>
      <button>Ver más</button>
    </div>
  )
}

export default Item