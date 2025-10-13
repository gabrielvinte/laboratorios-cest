import React from "react";

/**
 * Renderiza a navegação lateral com bolinhas clicáveis que acompanham a secção visível na página.
 * Este componente é responsivo e fica escondido em ecrãs de telemóvel.
 *
 * @param {{
 * activeSection: string;
 * sections: {id: string}[];
 * onDotClick: (id: string) => void;
 * }} props As propriedades do componente.
 * @param {string} props.activeSection O ID da secção que está ativa no momento.
 * @param {{id: string}[]} props.sections A lista de todas as secções da página.
 * @param {(id: string) => void} props.onDotClick A função a ser chamada quando uma bolinha é clicada.
 */
const SideNav = ({ activeSection, sections, onDotClick }) => {
  return (
    // Lógica de responsividade: escondido por defeito (mobile) e visível a partir de ecrãs médios (md).
    <div className="hidden md:flex fixed left-10 top-1/2 transform -translate-y-1/2 flex-col space-y-3 z-50">
      {/* Cria uma bolinha para cada secção que existe na página */}
      {sections.map(({ id }) => (
        <div
          key={id}
          onClick={() => onDotClick(id)}
          // Define o estilo da bolinha: azul e maior se estiver ativa, cinzenta caso contrário.
          className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
            activeSection === id
              ? "bg-blue-400 scale-125"
              : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default SideNav;

