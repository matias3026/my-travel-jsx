// src/components/Footer/Footer.jsx
const Footer = () => {
  const anioActual = new Date().getFullYear()

  return (
    <footer>
      <p>© {anioActual} MyTravelJSX. Todos los derechos reservados.</p>
      <div className="footer-redes">
        <span>Instagram</span>
        <span>Facebook</span>
        <span>Twitter</span>
      </div>
      <p>Contacto: info@mytraveljsx.com</p>
    </footer>
  )
}

export default Footer