import React, { forwardRef } from "react";
import devImage from "../assets/images/Escola.jpg";

/**
 * Renderiza a seção "Escritório Escola" da página.
 * Possui um layout responsivo que se adapta a diferentes tamanhos de tela.
 *
 * @param {{id: string}} props As propriedades do componente.
 * @param {string} props.id O ID único para a seção, usado para a navegação.
 * @param {React.Ref<HTMLElement>} ref A ref encaminhada para o elemento <section>.
 */
function EscritorioEscolaRender({ id }, ref) {
  return (
    <section ref={ref} id={id} className="bg-white py-16 px-4 sm:px-10">
      <div className="container mx-auto">
        {/* Título que aparece apenas em telas pequenas (celular/tablet). */}
        <h1 className="text-4xl md:text-5xl font-bold font-bungee mb-10 text-center lg:hidden">
          <span>ESCRITÓRIO</span>{" "}
          <span className="text-blue-900">ESCOLA</span>
        </h1>

        {/* Conteúdo principal */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-10 lg:gap-y-0">
          {/* Imagem */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:ml-10">
            <img
               src={devImage}
               alt="Pessoa programando"
               className="w-[80%] lg:w-[65%] h-auto"
              />

          </div>

          {/* Bloco de Texto */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Título que aparece apenas em telas grandes (monitores). */}
            <h1 className="hidden lg:block text-4xl md:text-5xl font-bold text-black mb-4 font-bungee">
              <span>ESCRITÓRIO</span>{" "}
              <span className="text-blue-900">ESCOLA</span>
            </h1>
            <p className="text-gray-800 text-lg leading-relaxed mb-8 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              esse eum dignissimos voluptatum doloremque unde beatae obcaecati?
              Earum dignissimos, ut, id aperiam quae explicabo totam reiciendis
              eaque, repellat ratione quisquam.
            </p>
            <button className="bg-blue-700 text-white font-semibold py-3 px-10 rounded-full hover:bg-blue-800 transition-all">
              Conhecer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const EscritorioEscola = forwardRef(EscritorioEscolaRender);
export default EscritorioEscola;

