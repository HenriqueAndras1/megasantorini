import { FaWhatsapp, FaEnvelope, FaStore } from 'react-icons/fa';

const Contato = () => {
  return (
    <section className="py-12 px-4 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Fale Conosco</h2>
      <p className="text-gray-700 mb-4">
        Tire dúvidas, peça informações ou chame pra comprar. Aceitamos Pix ou Cartão!
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-center gap-3">
          <FaWhatsapp className="text-green-500 text-2xl" />
          <p>
            WhatsApp: <a href="https://wa.me/5511953111056" target="_blank" className="text-blue-600 hover:underline">Clique aqui</a>
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <FaStore className="text-orange-400 text-2xl" />
          <p>
            Shopee: <a href="https://shopee.com.br/mega_santorini?categoryId=100011&entryPoint=ShopByPDP&itemId=22093889907" target="_blank" className="text-blue-600 hover:underline">Nosso perfil</a>
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <FaEnvelope className="text-red-500 text-2xl" />
          <p>
            Email: <a href="mailto:m.santorini10@gmail.com" className="text-blue-600 hover:underline">m.santorini10@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contato;
