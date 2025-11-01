import React, {forwardRef} from "react";
import dadosImage from "../assets/images/Dados.jpeg";


/**
 * Renderiza a seção "Robótica" da página.
 * Possui um layout responsivo que se adapta a diferentes tamanhos de tela.
 *
 * @param {{id: string}} props As propriedades do componente.
 * @param {string} props.id O ID único para a seção, usado para a navegação.
 * @param {React.Ref<HTMLElement>} ref A ref encaminhada para o elemento <section>.
 */


function DadosRender({id}, ref){
    return(
        <section ref={ref} id={id} className="flex bg-white py-16 px-4 sm:px-10" >
            <div className="container mx-auto">
        {/* Título que aparece apenas em telas pequenas (celular/tablet). */}
        <h1 className="text-4xl md:text-5xl font-bold font-bungee mb-10 text-center lg:hidden">
          <span className="text-black">ROB</span>
          <span className="text-blue-900">ÓTICA</span>
        </h1>

        <div className="flex lg:flex-row-reverse items-center justify-center gap-x-16 lg:gap-x-[12rem] gap-y-10 lg:gap-y-0">
          {/* Bloco de texto que muda de ordem dependendo do tamanho da tela. */}
          <div className="w-full lg:max-w-lg flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
            {/* Título que aparece apenas em telas grandes (monitores). */}
            <h1 className="hidden lg:block text-4xl md:text-5xl font-bold font-bungee mb-4">
              <span className="text-black">ROB</span>
              <span className="text-blue-900">ÓTICA</span>
            </h1>
            <p className="text-gray-800 text-lg leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              esse eum dignissimos voluptatum doloremque unde beatae obcaecati?
              Earum dignissimos, ut, id aperiam quae explicabo totam reiciendis
              eaque, repellat ratione quisquam.
            </p>
            <button className="bg-blue-700 text-white font-semibold py-3 px-10 rounded-full hover:bg-blue-800 transition-all">
              Conhecer
            </button>
          </div>

          {/* Bloco da imagem que também muda de ordem para se adaptar. */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end order-1 lg:order-2">
            <img
              src={dadosImage}
              alt="Ilustração de pessoas trabalhando com robótica"
              className="w-full max-w-lg h-auto"
            />
          </div>
        </div>
      </div>

        </section>
    )

}

const Dados = forwardRef(DadosRender);
export default Dados;