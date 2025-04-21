/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'react-router-dom';
import { camisetas, moletons, calcas,} from '../data';
import { Produto } from '../data/produtos';

import { useState } from 'react';
import { categorias } from '../data/categorias';

const produtosPorCategoria: Record<string, Produto[]> = {
  camisetas,
  moletons,
  calcas,
};

const ProdutosPorCategoria = () => {
  const { categoria } = useParams<{ categoria?: string }>();
  const categoriaInfo = categorias.find(c => c.slug === categoria);

  if (!categoriaInfo) {
    return <p className="text-center py-12 text-lg">Categoria não encontrada.</p>;
  }

  const produtos = produtosPorCategoria[categoriaInfo.slug] || [];

  const [selectedBrand, setSelectedBrand] = useState<string | "">("");
  const [selectedSize, setSelectedSize] = useState<string | "">("");

  const filterProducts = () => {
    return produtos.filter((produto) => {
      const matchesBrand = selectedBrand === "" || produto.marca === selectedBrand;
      const matchesSize = selectedSize === "" || produto.tamanhos?.includes(selectedSize);
      return matchesBrand && matchesSize;
    });
  };

  const allBrands = Array.from(new Set(produtos.map(produto => produto.marca)));
  const allSizes = Array.from(new Set(produtos.flatMap(produto => produto.tamanhos)));

  const filteredProducts = filterProducts();

  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);

  return (
    <section className="py-12 px-4 flex flex-col md:flex-row">
      {/* Filtros */}
      <div className="flex flex-col gap-4 w-full max-w-xs mr-4 sm:mr-6 md:mr-8 text-sm sm:text-base mb-6 md:mb-0">
        <h3 className="text-lg font-semibold mb-4 text-center sm:text-xl">Filtrar opções</h3>

        {/* Marca */}
        <div className="border rounded-md">
          <button
            onClick={() => setIsBrandOpen(!isBrandOpen)}
            className="w-full p-2 text-base font-semibold flex justify-between items-center bg-gray-200"
          >
            Marca
            <span>{isBrandOpen ? '-' : '+'}</span>
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
                  <option key={brand} value={brand}>{brand}</option>
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
            <span>{isSizeOpen ? '-' : '+'}</span>
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
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Cards */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredProducts.map((produto) => (
          <div key={produto.id} className="border rounded-xl p-4 shadow-md bg-white max-w-xs mx-2 flex flex-col">
            <div className="w-full aspect-[3/4] overflow-hidden rounded-lg mb-2 bg-gray-100">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="object-cover w-full h-full"
              />
            </div>

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
    </section>
  );
};

export default ProdutosPorCategoria;