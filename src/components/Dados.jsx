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
        <section ref={ref} id={id}>
            <div>
                <h1>
                    <span>Da<strong color="blue">dos</strong></span>
                </h1>
            </div>

            <div>
                <div>
                    <img src={dadosImage} alt="" />
                </div>
                <div>
                    <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse eum dignissimos voluptatum doloremque unde beatae obcaecati? Earum dignissimos, ut, id aperiam quae explicabo totam reiciendis eaque, repellat ratione quisquam.
                    </p>
                    <button>
                        Conhecer
                    </button>
                </div>
            </div>
        </section>
    )

}

const Dados = forwardRef(DadosRender);
export default Dados;