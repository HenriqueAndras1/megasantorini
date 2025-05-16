import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  camisetas,
  calca,
  bermuda,
  polo,
  tShirtsFemininas,
  bobojaco,
  tenis,
  cueca,
  meia,
  plusSize,
  Produto,
  moletom,
} from "../data";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { FaArrowLeft } from "react-icons/fa";

const produtosPorCategoria: Record<string, Produto[]> = {
  camisetas,
  calca,
  bermuda,
  plusSize,
  polo,
  tShirtsFemininas,
  bobojaco,
  tenis,
  cueca,
  meia,
  moletom,
};

const ProdutoDetalhe = () => {
  const { categoria, id } = useParams();
  const navigate = useNavigate();

  const produtos = produtosPorCategoria[categoria || ""] || [];
  const produto = produtos.find((p) => p.id === Number(id));

  const [indiceImagemSelecionada, setIndiceImagemSelecionada] = useState(0);
  const [modalAberto, setModalAberto] = useState(false);
  const [favoritos, setFavoritos] = useState<number[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoritos");
    if (savedFavorites) {
      setFavoritos(JSON.parse(savedFavorites));
    }
  }, []);

  if (!produto) {
    return <p className="text-center py-12 text-lg">Produto não encontrado.</p>;
  }

  const todasImagens = [produto.imagem, ...(produto.imagensSecundarias || [])];
  const isFavorito = favoritos.includes(produto.id);

  const toggleFavorito = () => {
    let novosFavoritos: number[];
    if (isFavorito) {
      novosFavoritos = favoritos.filter((id) => id !== produto.id);
    } else {
      novosFavoritos = [...favoritos, produto.id];
    }
    setFavoritos(novosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
  };

  const mudarImagem = (novoIndice: number) => {
    if (novoIndice < 0) novoIndice = todasImagens.length - 1;
    if (novoIndice >= todasImagens.length) novoIndice = 0;
    setIndiceImagemSelecionada(novoIndice);
  };

  return (
    <section className="p-4 md:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer flex items-center gap-2 text-black px-4 py-2 rounded text-lg font-semibold hover:text-blue-600 transition"
            aria-label="Voltar"
          >
            <FaArrowLeft />
            Voltar
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Imagem com miniaturas */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-full md:w-[75%] overflow-hidden rounded-lg border relative bg-white cursor-zoom-in">
              <img
                src={todasImagens[indiceImagemSelecionada]}
                alt={produto.nome}
                className="w-full select-none"
                style={{ userSelect: "none" }}
                onClick={() => setModalAberto(true)}
              />

              {todasImagens.length > 1 && (
                <>
                  {/* Botão voltar (seta esquerda) */}
                  <button
                    onClick={() => mudarImagem(indiceImagemSelecionada - 1)}
                    aria-label="Imagem anterior"
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
                    style={{ userSelect: "none", cursor: "pointer" }}
                  >
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  {/* Botão avançar (seta direita) */}
                  <button
                    onClick={() => mudarImagem(indiceImagemSelecionada + 1)}
                    aria-label="Próxima imagem"
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
                    style={{ userSelect: "none", cursor: "pointer" }}
                  >
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            <div className="flex md:flex-col gap-2 md:overflow-y-auto max-h-[500px]">
              {todasImagens.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Imagem ${i + 1}`}
                  onClick={() => setIndiceImagemSelecionada(i)}
                  className={`h-20 w-20 object-cover rounded cursor-pointer border ${
                    indiceImagemSelecionada === i
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Dados do produto */}
<div className="w-full md:w-1/2 flex flex-col gap-4 items-center md:items-start text-center md:text-left">
  <h1 className="text-2xl font-bold">{produto.nome}</h1>

  {produto.logoMarca && (
    <div className="h-10">
      <img
        src={produto.logoMarca}
        alt={produto.marca}
        className="h-full object-contain"
      />
    </div>
  )}

  <p>
    <strong>Marca:</strong> {produto.marca}
  </p>
  <p>
    <strong>Estoque:</strong> {produto.estoque}
  </p>
  <p>
    <strong>Cor:</strong> {produto.cor}
  </p>

  {produto.tamanhos?.length > 0 && (
    <div>
      <p>
        <strong>Tamanhos disponíveis:</strong>
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-1">
        {produto.tamanhos.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gray-100 border rounded text-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )}

  <p className="text-3xl font-bold text-black">
    R$ {produto.preco.toFixed(2)}
  </p>

  <div className="mt-2 flex items-center gap-4">
    <Link
      to="/contato"
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded text-lg font-semibold"
    >
      Comprar
    </Link>

    <button
      onClick={toggleFavorito}
      aria-label={
        isFavorito ? "Remover dos favoritos" : "Adicionar aos favoritos"
      }
      className={`cursor-pointer text-3xl transition-colors duration-300 ${
        isFavorito ? "text-red-500" : "text-gray-400 hover:text-red-500"
      }`}
    >
      {isFavorito ? "❤️" : "🤍"}
    </button>
  </div>
</div>

        </div>
      </div>

      {/* Modal de imagem */}
      {modalAberto && (
        <div
          onClick={() => setModalAberto(false)}
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[90vw] max-h-[90vh] bg-white rounded"
          >
            <TransformWrapper
              wheel={{ step: 0.1 }}
              doubleClick={{ disabled: true }}
              pinch={{ step: 5 }}
              minScale={1}
              maxScale={5}
              initialScale={1}
            >
              <TransformComponent>
                <img
                  src={todasImagens[indiceImagemSelecionada]}
                  alt={produto.nome}
                  className="max-h-[90vh] max-w-[90vw] select-none"
                  style={{ userSelect: "none", touchAction: "none" }}
                />
              </TransformComponent>
            </TransformWrapper>

            {todasImagens.length > 1 && (
              <>
                <button
                  onClick={() => mudarImagem(indiceImagemSelecionada - 1)}
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
                  aria-label="Imagem anterior"
                  style={{ userSelect: "none" }}
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <button
                  onClick={() => mudarImagem(indiceImagemSelecionada + 1)}
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
                  aria-label="Próxima imagem"
                  style={{ userSelect: "none" }}
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}

            <div className="flex gap-2 mt-4 justify-center p-2 overflow-x-auto max-w-[90vw]">
              {todasImagens.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Imagem ${i + 1}`}
                  onClick={() => setIndiceImagemSelecionada(i)}
                  className={`h-16 w-16 object-cover rounded cursor-pointer border ${
                    indiceImagemSelecionada === i
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                  style={{ userSelect: "none" }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProdutoDetalhe;
