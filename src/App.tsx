import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ProdutosPorCategoria from './pages/ProdutosPorCategoria'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Produtos from './pages/Produtos'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/produtos/:categoria" element={<ProdutosPorCategoria />} />
          </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App