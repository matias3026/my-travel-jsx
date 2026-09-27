// src/data/destinos.js
const destinos = [
  {
    id: 1,
    nombre: "Santorini, Grecia",
    precio: 850,
    categoria: "europa",
    imagen: "/images/santorini.jpg",
    descripcion: "Disfrutá de los atardeceres más famosos del mundo en Oia."
  },
  {
    id: 2,
    nombre: "París, Francia",
    precio: 920,
    categoria: "europa",
    imagen: "/images/paris.jpg",
    descripcion: "La ciudad del amor, con la Torre Eiffel de protagonista."
  },
  {
    id: 3,
    nombre: "Kyoto, Japón",
    precio: 1100,
    categoria: "asia",
    imagen: "/images/kyoto.jpg",
    descripcion: "Templos milenarios y cerezos en flor."
  },
  {
    id: 4,
    nombre: "Bariloche, Argentina",
    precio: 480,
    categoria: "argentina",
    imagen: "/images/bariloche.jpg",
    descripcion: "Montañas, chocolate y paisajes patagónicos únicos."
  },
  {
    id: 5,
    nombre: "Nueva York, EE.UU.",
    precio: 990,
    categoria: "america",
    imagen: "/images/nuevayork.jpg",
    descripcion: "La ciudad que nunca duerme, rascacielos y Times Square."
  },
  {
    id: 6,
    nombre: "Bali, Indonesia",
    precio: 1050,
    categoria: "asia",
    imagen: "/images/bali.jpg",
    descripcion: "Playas paradisíacas, templos y arrozales infinitos."
  },
  {
    id: 7,
    nombre: "Roma, Italia",
    precio: 870,
    categoria: "europa",
    imagen: "/images/roma.jpg",
    descripcion: "Historia milenaria, el Coliseo y la mejor pasta del mundo."
  },
  {
    id: 8,
    nombre: "Cancún, México",
    precio: 760,
    categoria: "america",
    imagen: "/images/cancun.jpg",
    descripcion: "Playas de arena blanca y aguas turquesas del Caribe."
  },
  {
    id: 9,
    nombre: "Ciudad del Cabo, Sudáfrica",
    precio: 1200,
    categoria: "africa",
    imagen: "/images/ciudaddelcabo.jpg",
    descripcion: "Naturaleza salvaje entre montañas y el océano."
  },
  {
    id: 10,
    nombre: "Sídney, Australia",
    precio: 1350,
    categoria: "oceania",
    imagen: "/images/sidney.jpg",
    descripcion: "La icónica Ópera y playas de fama mundial."
  },
]

export const getDestinos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(destinos)
    }, 500) // simula medio segundo de "espera de red"
  })
}

// export default destinos


export const getDestinoPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const destino = destinos.find((d) => d.id === Number(id))
      resolve(destino)
    }, 500)
  })
}