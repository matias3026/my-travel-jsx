// src/components/Item/Item.jsx
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ destino }) => {
  return (
    <div className="item">
      <img src={destino.imagen} alt={destino.nombre} />
      <h3>{destino.nombre}</h3>
      <p>{destino.descripcion}</p>
      <p className="item-precio">USD {destino.precio}</p>
      <Link to={`/destino/${destino.id}`}>
        <button>Ver más</button>
      </Link>
    </div>
  )
}

export default Item