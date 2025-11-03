import React, { forwardRef } from "react";
import img_ia from "../assets/images/InteligenciaArtificial.jpg"

/**
 * Renderiza a seção "Escritório Escola" da página.
 * Possui um layout responsivo que se adapta a diferentes tamanhos de tela.
 *
 * @param {{id: string}} props As propriedades do componente.
 * @param {string} props.id O ID único para a seção, usado para a navegação.
 * @param {React.Ref<HTMLElement>} ref A ref encaminhada para o elemento <section>.
 */

function IARender({ id }, ref){
    return(

        <section ref={ref} id={id} className="bg-white py-16 px-4 sm:px-10 ">
        <div className="flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-y-0 "> 
        

        <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left pl-[100px]">
            <h1 className="hidden lg:block text-4xl md:text-5xl font-bold text-black mb-4 font-bungee"> 
                <span>I.</span>{" "}
                <span className="text-blue-900">A</span>
            </h1>

            

            <p className="text-gray-800 text-lg leading-relaxed mb-8 max-w-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, blanditiis? Quia, rerum repellat blanditiis repudiandae reiciendis beatae numquam voluptatum deserunt, soluta, exercitationem perspiciatis non sed. Laudantium obcaecati cupiditate voluptatibus. Odio.</p>

            <button className="bg-blue-700 text-white font-semibold py-3 px-10 rounded-full hover:bg-blue-800 transition-all"> Conhecer</button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:ml-40">
            <img src={img_ia} alt="img_IA" className="w-[70%] lg:w-[70%] h-auto"/>
        </div>


        </div>
        </section>
    )
}

const IA = forwardRef(IARender);
export default IA