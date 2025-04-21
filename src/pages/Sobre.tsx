const Sobre = () => {
    return (
      <section className="py-12 px-4 max-w-3xl mx-auto text-center">
        
        <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
        <p className="text-gray-700 text-lg">
          Somos uma loja independente que nasceu da paixão por estilo e qualidade. Buscamos oferecer produtos únicos, com ótimo custo-benefício, sempre prezando pelo bom atendimento.
        </p>
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