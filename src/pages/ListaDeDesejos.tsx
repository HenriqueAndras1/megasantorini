import { useState, useEffect } from "react";
import { bermuda, bobojaco, calca, camisetas, cueca, meia, moletom, plusSize, polo, Produto, tenis, tShirtsFemininas } from "../data";


const todosProdutos: Produto[] = [...camisetas, ...moletom, ...calca, ...bermuda, ...plusSize, ...polo, ...tShirtsFemininas, ...bobojaco, ...tenis, ...cueca, ...meia];

const ListaDeDesejos = () => {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoritos");
    const favoritosIds: number[] = savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
    const produtosFavoritados = todosProdutos.filter((produto) =>
      favoritosIds.includes(produto.id)
    );
    setFavoritos(produtosFavoritados);
  }, []);

  const removerDosFavoritos = (id: number) => {
    const atualizados = favoritos.filter((produto) => produto.id !== id);
    setFavoritos(atualizados);
    localStorage.setItem(
      "favoritos",
      JSON.stringify(atualizados.map((p) => p.id))
    );
  };

  return (
    <section className="py-12 px-4">
      <h2 className="text-center text-2xl font-bold mb-8">
        Sua Lista de Desejos
      </h2>

      {favoritos.length === 0 ? (
        <div className="text-center text-gray-500">
          Você ainda não tem produtos favoritos.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {favoritos.map((produto) => (
            <div
              key={produto.id}
              className="border rounded-xl p-4 shadow-md bg-white max-w-xs mx-2 flex flex-col relative"
            >
              {/* Botão de remover */}
              <button
                onClick={() => removerDosFavoritos(produto.id)}
                className="absolute top-2 right-2 text-red-500 text-2xl"
              >
                ❌
              </button>

              <div className="w-full aspect-[3/4] overflow-hidden rounded-lg mb-2 bg-gray-100">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-center mb-2">
                {produto.nome}
              </h3>
              <p className="text-center text-sm text-gray-700 mb-2">
                R$ {produto.preco.toFixed(2)}
              </p>

              {produto.tamanhos && (
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  {produto.tamanhos.map((tamanho, idx) => (
                    <span
                      key={idx}
                      className="border px-2 py-0.5 text-xs rounded text-gray-700 bg-gray-100"
                    >
                      {tamanho}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex justify-center">
                <a
                  href={produto.linkShopee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-3 py-1.5 text-sm sm:text-base rounded hover:bg-blue-700"
                >
                  Ver na Shopee
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ListaDeDesejos;
