import React from "react";
import logo from "../assets/images/logo-cest.png";

const Header = () => {
  return (
    <header className="relative z-30 py-4 px-10 bg-[#000066] shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="CEST Logo" className="h-10" />
        </div>

        {/* Navegação */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <a href="#escritorio" className="text-white hover:text-gray-300 hover:underline underline-offset-4 transition-all">Escritório</a>
          <a href="#robotica" className="text-white hover:text-gray-300 hover:underline underline-offset-4 transition-all">Robótica</a>
          <a href="#" className="text-white hover:text-gray-300 hover:underline underline-offset-4 transition-all">Dados</a>
          <a href="#" className="text-white hover:text-gray-300 hover:underline underline-offset-4 transition-all">I.A</a>
        </nav>

        {/* Botões de ação */}
        <div className="flex items-center space-x-4">
          <button className="bg-white text-blue-800 font-semibold py-2 px-5 rounded-md hover:bg-[#0303a5] hover:text-white transition-colors">Registrar</button>
          <button className="bg-transparent text-white font-semibold py-2 px-5 rounded-md border border-white hover:bg-white hover:text-blue-800 transition-colors">Entrar</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
