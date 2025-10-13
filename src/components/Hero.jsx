import React, { forwardRef } from "react";
import keyboardImage from "../assets/images/teclado.png";
import {
  FiMonitor, FiCpu, FiCloud, FiSmartphone, FiSettings,
  FiDatabase, FiBarChart2, FiWifi, FiCode, FiTerminal,
  FiGitBranch, FiGlobe,
} from "react-icons/fi";

/**
 * Renderiza a seção principal da página ("Hero").
 * Contém o título, texto introdutório e elementos visuais dos laboratórios.
 *
 * @param {{id: string}} props As propriedades do componente.
 * @param {string} props.id O ID único da seção.
 * @param {React.Ref<HTMLElement>} ref A ref encaminhada para o elemento <section>.
 */
function HeroRender({ id }, ref) {
  return (
    <section
      ref={ref}
      id={id}
      className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between py-16 lg:py-20 px-4 sm:px-10 bg-white overflow-hidden"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between relative">
        {/* Texto e botão */}
        <div className="w-full lg:w-[45%] flex flex-col items-center text-center lg:items-start lg:text-left z-10 lg:ml-10 order-2 lg:order-1 mt-10 lg:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bungee text-blue-900 mb-6 tracking-[2px] drop-shadow-md">
            LABORATÓRIOS CEST
          </h1>
          <p className="text-gray-800 text-lg leading-relaxed mb-8 max-w-lg">
            Você Está no portal oficial dos laboratórios de sistemas de informação do CEST Centro Universitário.
            Aqui você tem acesso as principais informações sobre os laboratórios: objetivos, professores, projetos e muito mais!
            Além disso, pode fazer sua inscrição e descobrir qual o laboratório é perfeito para você de acordo com a área da tecnologia que
            você se identifica, clique abaixo e descubra.
          </p>
          <button className="bg-blue-900 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-800 transition-transform transform hover:scale-105 shadow-md">
            Conheça-os
          </button>
        </div>

        {/* Círculo azul e ícones */}
        <div className="w-full lg:w-[55%] h-80 lg:h-auto relative flex items-center justify-center order-1 lg:order-2">
          <div className="absolute w-[500px] h-[500px] lg:w-[850px] lg:h-[850px] bg-[#0f2b74] rounded-full lg:right-[-100px] top-1/2 transform -translate-y-1/2 z-0 shadow-lg">
            <FiDatabase className="text-blue-500 opacity-30 text-[280px] md:text-[520px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Ícones e textos (desktop) */}
            <div className="hidden lg:block">
              <div className="absolute inset-0 text-blue-300 opacity-25">
                <FiCloud className="absolute top-[80px] left-[340px]" size={60} />
                <FiMonitor className="absolute top-[120px] left-[180px]" size={55} />
                <FiCpu className="absolute top-[160px] right-[160px]" size={55} />
                <FiGlobe className="absolute top-[260px] right-[300px]" size={50} />
                <FiCode className="absolute top-[300px] left-[220px]" size={55} />
                <FiWifi className="absolute top-[360px] right-[200px]" size={50} />
                <FiBarChart2 className="absolute bottom-[320px] left-[200px]" size={55} />
                <FiSettings className="absolute bottom-[300px] right-[260px]" size={60} />
                <FiSmartphone className="absolute bottom-[260px] right-[420px]" size={50} />
                <FiGitBranch className="absolute bottom-[160px] left-[280px]" size={50} />
                <FiTerminal className="absolute bottom-[140px] right-[180px]" size={50} />
              </div>

              {/* Nomes dos laboratórios */}
              <div className="absolute top-[280px] right-[140px] text-white text-lg font-semibold uppercase tracking-wide leading-6 text-right">
                <p>ESCRITÓRIO ESCOLA</p>
                <p>ROBÓTICA</p>
                <p>DADOS</p>
                <p>I.A</p>
              </div>
            </div>
          </div>

          {/* Imagem do teclado */}
          <img
            src={keyboardImage}
            alt="Mãos digitando em um teclado"
            className="absolute w-[500px] lg:w-[850px] h-auto z-10 lg:right-[200px] top-1/2 transform -translate-y-[40%] lg:-translate-y-[20%] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

const Hero = forwardRef(HeroRender);
export default Hero;
