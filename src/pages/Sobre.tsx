import { FaHeart, FaHandshake, FaStar } from 'react-icons/fa';

const Sobre = () => {
  return (
    <section className="py-12 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Sobre Nós</h2>

      <div className="text-gray-700 text-lg space-y-4 mb-8">
        <div className="flex items-center justify-center gap-3">
          <FaHeart className="text-red-500 text-2xl" />
          <span>Loja independente movida por paixão por estilo e autenticidade.</span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <FaStar className="text-yellow-400 text-2xl" />
          <span>Qualidade e ótimo custo-benefício em cada produto.</span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <FaHandshake className="text-green-500 text-2xl" />
          <span>Atendimento próximo, com foco em você.</span>
        </div>
      </div>

      <img
        src="/logo/ms-logo.png"
        alt="Logo da loja"
        width={200}
        height={200}
        className="mx-auto mb-6"
      />
    </section>
  );
};

export default Sobre;
