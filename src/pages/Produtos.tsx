import { Link, useNavigate } from 'react-router-dom';
import { categorias } from '../data/categorias';
import { FaArrowLeft } from 'react-icons/fa'; // Import do ícone

const Produtos = () => {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <section className="py-12 px-4 text-center">
      {/* Botão de voltar */}
      <div className="max-w-xs text-left">
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer flex items-center gap-2 text-black px-4 py-2 rounded text-lg font-semibold hover:text-blue-600 transition"
          aria-label="Voltar"
        >
          <FaArrowLeft />
          Voltar
        </button>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">Categorias de Produtos</h2>

      <div className="mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categorias.map((categoria) => (
            <Link
              key={categoria.slug}
              to={`/produtos/${categoria.slug}`}
              className="border rounded-xl p-4 shadow-md bg-white flex flex-col max-w-xs w-full mx-auto"
            >
              <div className="w-full aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-gray-100">
                <img
                  src={categoria.imagem}
                  alt={categoria.nome}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold">{categoria.nome}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produtos;
