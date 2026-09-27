// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/destino/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Layout>
  )
}

export default App