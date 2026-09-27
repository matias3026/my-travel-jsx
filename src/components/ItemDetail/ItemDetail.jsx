// src/components/ItemDetail/ItemDetail.jsx
import './ItemDetail.css'

const ItemDetail = ({ destino }) => {
  return (
    <div className="item-detail">
      <img src={destino.imagen} alt={destino.nombre} />
      <div className="item-detail-info">
        <h2>{destino.nombre}</h2>
        <p>{destino.descripcion}</p>
        <p className="item-detail-precio">USD {destino.precio}</p>
        <button>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemDetail