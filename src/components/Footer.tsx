

const Footer = () => {
  return (
    <footer className="bg-slate-800 shadow-inner py-6 mt-8">
      <div className="container mx-auto text-center text-white text-sm space-y-2">
        <div className="flex justify-center items-center space-x-6">
          <a
            href="https://shopee.com.br/mega_santorini?categoryId=100011&entryPoint=ShopByPDP&itemId=22093889907"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400"
          >
            
          </a>
          <a
            href="https://www.instagram.com/mega.santorini/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
           
          </a>
        </div>
        <p>© {new Date().getFullYear()} Mega Santorini. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;