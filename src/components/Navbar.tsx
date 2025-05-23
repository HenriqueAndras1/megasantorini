import { FaWhatsapp } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const linkClass =
    "inline-block font-bold hover:scale-105 transition-transform duration-200";

  const isActive = (path: string) => location.pathname === path;

  const activeClass = "bg-blue-600 rounded px-2";

  return (
    <nav className="bg-slate-800 shadow w-full min-h-[80px]">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center w-full">
          {/* LOGO */}
          <div className="flex-shrink-0 flex-grow-0">
            <Link to="/" className="hover:scale-105 transition-transform duration-200">
              <img
                src="/logo/ms-logo.png"
                alt="Logo da loja Mega Santorini"
                className="h-[90px] w-auto rounded-2xl"
              />
            </Link>
          </div>

          {/* CENTRO */}
          <div className="flex-grow text-center text-red-500 font-bold text-sm md:text-base flex items-center justify-center min-w-0 px-2">
            {/* Desktop: sempre mostra o H1 */}
            <div className="hidden md:flex items-center">
              <span className="break-words">
                📢 VENDAS APENAS SHOPEE OU WHATSAPP
              </span>
              <FaWhatsapp className="text-green-500 ml-2 shrink-0" />
            </div>

            {/* Mobile: mostra H1 só se menu fechado */}
            {!menuOpen && (
              <div className="flex md:hidden items-center">
                <span className="break-words">
                  📢 VENDAS APENAS SHOPEE OU WHATSAPP
                </span>
                <FaWhatsapp className="text-green-500 ml-2 shrink-0" />
              </div>
            )}

            {/* Mobile: mostra links no lugar do H1 quando menu aberto */}
            {menuOpen && (
              <div className="flex flex-col space-y-1 md:hidden text-white">
                <Link
                  to="/"
                  className={`${linkClass} block ${isActive("/") ? activeClass : ""}`}
                >
                  Home
                </Link>
                <Link
                  to="/produtos"
                  className={`${linkClass} block ${isActive("/produtos") ? activeClass : ""}`}
                >
                  Produtos
                </Link>
                <Link
                  to="/favoritos"
                  className={`${linkClass} block ${isActive("/favoritos") ? activeClass : ""}`}
                >
                  Lista de Desejos
                </Link>
                <Link
                  to="/sobre"
                  className={`${linkClass} block ${isActive("/sobre") ? activeClass : ""}`}
                >
                  Sobre Nós
                </Link>
                <Link
                  to="/contato"
                  className={`${linkClass} block ${isActive("/contato") ? activeClass : ""}`}
                >
                  Contato
                </Link>
              </div>
            )}
          </div>

          {/* MENU HAMBURGUER NO MOBILE */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>

          {/* LINKS DESKTOP */}
          <div className="hidden md:flex flex-shrink-0 flex-grow-0">
            <div className="flex flex-col items-end text-white space-y-1 md:flex-row md:space-y-0 md:space-x-4">
              <Link to="/" className={`${linkClass} ${isActive("/") ? activeClass : ""}`}>
                Home
              </Link>
              <Link to="/produtos" className={`${linkClass} ${isActive("/produtos") ? activeClass : ""}`}>
                Produtos
              </Link>
              <Link to="/favoritos" className={`${linkClass} ${isActive("/favoritos") ? activeClass : ""}`}>
                Lista de Desejos
              </Link>
              <Link to="/sobre" className={`${linkClass} ${isActive("/sobre") ? activeClass : ""}`}>
                Sobre Nós
              </Link>
              <Link to="/contato" className={`${linkClass} ${isActive("/contato") ? activeClass : ""}`}>
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
