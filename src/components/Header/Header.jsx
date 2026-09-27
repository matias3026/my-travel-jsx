// src/components/Header/Header.jsx
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <header>
      <h1>MyTravelJSX</h1>
      <Nav />
      <div className="header-actions">
        <button>🛒 Carrito (0)</button>
        <button>👤 Login</button>
      </div>
    </header>
  )
}

export default Header