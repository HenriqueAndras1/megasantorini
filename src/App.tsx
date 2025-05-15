import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProdutosPorCategoria from "./pages/ProdutosPorCategoria";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";
import ListaDeDesejos from "./pages/ListaDeDesejos";

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
            <Route
              path="/produtos/:categoria"
              element={<ProdutosPorCategoria />}
            />
            <Route path="/favoritos" element={<ListaDeDesejos />} />{" "}
            {/* <- Aqui */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
