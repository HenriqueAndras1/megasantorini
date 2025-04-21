import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const linkClass = "inline-block font-bold hover:scale-105 transition-transform duration-200";

  return (
    <nav className="bg-slate-800 shadow relative min-h-[80px]">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* LOGO */}
        <Link to="/" className="inline-block hover:scale-105 transition-transform duration-200">
          <img
            src="/logo/ms-logo.png"
            alt="Logo da loja Mega Santorini"
            className="h-[90px] w-auto rounded-2xl"
          />
        </Link>

        {/* H1 CENTRALIZADO */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-red-500 font-bold text-sm md:text-base flex flex-col md:flex-row items-center text-center">
          <span>📢 VENDAS APENAS SHOPEE OU WHATSAPP</span>
          <FaWhatsapp className="text-green-500 md:ml-2 mt-1 md:mt-0" />
        </h1>

        {/* Links */}
        <div className="flex flex-col md:flex-row text-white space-y-2 md:space-x-4 md:space-y-0 mt-4 md:mt-0">
          <Link to="/" className={linkClass}>Home</Link>
          <Link to="/produtos" className={linkClass}>Produtos</Link>
          <Link to="/sobre" className={linkClass}>Sobre</Link>
          <Link to="/contato" className={linkClass}>Contato</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;