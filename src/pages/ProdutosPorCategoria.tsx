/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
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
import { categorias } from "../data/categorias";
import { FaArrowLeft } from "react-icons/fa";

const produtosPorCategoria: Record<string, Produto[]> = {
  camisetas, // slug: "camisetas"
  calca, // slug: "calca"
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

const ProdutosPorCategoria = () => {
  const { categoria } = useParams<{ categoria?: string }>();
  const categoriaInfo = categorias.find((c) => c.slug === categoria);
  const navigate = useNavigate();

  if (!categoriaInfo) {
    return (
      <p className="text-center py-12 text-lg">Categoria não encontrada.</p>
    );
  }

  const produtos = produtosPorCategoria[categoriaInfo.slug] || [];

  const [favoritos, setFavoritos] = useState<number[]>(() => {
    const savedFavorites = localStorage.getItem("favoritos");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const toggleFavorito = (produtoId: number) => {
    const novosFavoritos = favoritos.includes(produtoId)
      ? favoritos.filter((id) => id !== produtoId)
      : [...favoritos, produtoId];

    setFavoritos(novosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos)); // Salva no localStorage
  };

  const [selectedBrand, setSelectedBrand] = useState<string | "">("");
  const [selectedSize, setSelectedSize] = useState<string | "">("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(5000); // Ajuste os valores padrão
  const [sortOrder, setSortOrder] = useState<"" | "asc" | "desc">("");

  const filterProducts = () => {
    return produtos.filter((produto) => {
      const matchesBrand =
        selectedBrand === "" || produto.marca === selectedBrand;
      const matchesSize =
        selectedSize === "" || produto.tamanhos?.includes(selectedSize);
      const matchesMinPrice = produto.preco >= minPrice;
      const matchesMaxPrice = produto.preco <= maxPrice;
      return matchesBrand && matchesSize && matchesMinPrice && matchesMaxPrice;
    });
  };

  const filteredProducts = filterProducts();

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "asc") return a.preco - b.preco;
    if (sortOrder === "desc") return b.preco - a.preco;
    return 0;
  });

  const allBrands = Array.from(
    new Set(produtos.map((produto) => produto.marca))
  );
  const allSizes = Array.from(
    new Set(produtos.flatMap((produto) => produto.tamanhos))
  );

  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);

  return (
    <section className="py-12 px-4">
      {/* Botão Voltar acima da caixa de filtros */}
      <div className="max-w-xs mb-6 ml-25">
        <button
          onClick={() => navigate("/produtos")}
          className="cursor-pointer flex items-center gap-2 text-black px-4 py-2 rounded text-lg font-semibold hover:text-blue-600 transition"
          aria-label="Voltar"
        >
          <FaArrowLeft />
          Voltar
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Filtros */}
        <div className="flex flex-col gap-4 w-full max-w-xs mr-4 sm:mr-6 md:mr-8 text-sm sm:text-base mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4 text-center sm:text-xl">
            Filtrar opções
          </h3>

          {/* Marca */}
          <div className="border rounded-md">
            <button
              onClick={() => setIsBrandOpen(!isBrandOpen)}
              className="w-full p-2 text-base font-semibold flex justify-between items-center bg-gray-200"
            >
              Marca
              <span>{isBrandOpen ? "-" : "+"}</span>
            </button>
            {isBrandOpen && (
              <div className="p-2">
                <select
                  id="brand"
                  className="p-2 border rounded-md w-full"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  <option value="">Selecione uma marca</option>
                  {allBrands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Tamanho */}
          <div className="border rounded-md">
            <button
              onClick={() => setIsSizeOpen(!isSizeOpen)}
              className="w-full p-2 text-base font-semibold flex justify-between items-center bg-gray-200"
            >
              Tamanho
              <span>{isSizeOpen ? "-" : "+"}</span>
            </button>
            {isSizeOpen && (
              <div className="p-2">
                <select
                  id="size"
                  className="p-2 border rounded-md w-full"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="">Selecione um tamanho</option>
                  {allSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Preço */}
          <div className="border rounded-md">
            <div className="w-full p-2 text-base font-semibold bg-gray-200">
              Preço
            </div>
            <div className="p-2">
              <div className="flex justify-between text-sm">
                <span>R$ {minPrice}</span>
                <span>R$ {maxPrice}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full mb-2"
              />
              <input
                type="range"
                min="0"
                max="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          {/* Ordenar por preço */}
          <div className="border rounded-md">
            <div className="w-full p-2 text-base font-semibold bg-gray-200">
              Ordenar por preço
            </div>
            <div className="p-2">
              <select
                className="p-2 border rounded-md w-full"
                value={sortOrder}
                onChange={(e) =>
                  setSortOrder(e.target.value as "asc" | "desc" | "")
                }
              >
                <option value="">Sem ordenação</option>
                <option value="asc">Menor preço</option>
                <option value="desc">Maior preço</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lista de produtos */}
        <div className="w-full">
          {sortedProducts.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              Nenhum produto disponível no momento.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {sortedProducts.map((produto) => (
                <div
                  key={produto.id}
                  className="border rounded-xl p-4 shadow-md bg-white max-w-xs mx-2 flex flex-col relative"
                >
                  {/* Coração no canto superior direito */}
                  <button
                    onClick={() => toggleFavorito(produto.id)}
                    className={`absolute top-2 right-2 text-3xl cursor-pointer ${
                      favoritos.includes(produto.id)
                        ? "text-red-500"
                        : "text-white"
                    }`}
                  >
                    {favoritos.includes(produto.id) ? "❤️" : "🤍"}
                  </button>

                  <Link
                    to={`/produto/${categoria}/${produto.id}`}
                    className="w-full aspect-[3/4] overflow-hidden rounded-lg mb-2 bg-gray-100 block"
                  >
                    <img
                      src={produto.imagem}
                      alt={produto.nome}
                      className="object-cover w-full h-full"
                    />
                  </Link>

                  <h3 className="text-base sm:text-lg font-medium text-center mb-2 flex-grow">
                    {produto.nome}
                  </h3>

                  <div className="flex justify-center mb-2">
                    <img
                      src={produto.logoMarca}
                      alt={produto.marca}
                      className="h-8"
                    />
                  </div>

                  <p className="text-center text-sm text-gray-700 mb-2">
                    R$ {produto.preco.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProdutosPorCategoria;
