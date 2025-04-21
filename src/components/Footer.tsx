import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiShopee } from 'react-icons/si';

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
            <SiShopee className="text-4xl align-middle mb-2 size-10" />
          </a>

          <a
            href="https://www.instagram.com/mega.santorini/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram className="text-4xl align-middle size-10" />
          </a>

          <a
            href="https://wa.me/5511953111056"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            <FaWhatsapp className="text-4xl align-middle size-10" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Mega Santorini. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
