const Contato = () => {
    return (
      <section className="py-12 px-4 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Fale Conosco</h2>
        <p className="text-gray-700 mb-4">
          Tire dúvidas, peça informações ou chame pra comprar. Aceitamos Pix ou Cartão!
        </p>
        <div className="space-y-4">
          <p>📱 WhatsApp: <a href="https://wa.me/seuNumero" target="_blank" className="text-blue-600 hover:underline">Clique aqui</a></p>
          <p>🛒 Shopee: <a href="https://shopee.com.br/mega_santorini?categoryId=100011&entryPoint=ShopByPDP&itemId=22093889907" target="_blank" className="text-blue-600 hover:underline">Nosso perfil</a></p>
          <p>📧 Email: m.santorini10@gmail.com</p>
        </div>
      </section>
    );
  };
  
  export default Contato;
  