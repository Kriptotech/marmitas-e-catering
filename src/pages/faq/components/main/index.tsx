import style from "./styles.module.css";
import { ArrowCircleRight } from "phosphor-react";
import { Item } from "./item";
import { Link } from "react-router-dom";

export function Main() {
    return (
        <div className={style.container}>
            <div className={style.left} data-aos="fade-right">
                <span>FAQ'S</span>
                <h2>
                    Preguntas feitas <span>Frequentemente</span>
                </h2>
                <p>
                    Aqui estão as perguntas feitas regularmente pelos nossos
                    clientes. 
                </p>

                <Link to="/contactar">
                    Nos contacte{" "}
                    <ArrowCircleRight color="white" size={20} weight="fill" />
                </Link>
            </div>

            <div className={style.right} data-aos="fade-left">
                <Item
                    isOpened={true}
                    title=" Quais tipos de eventos a MARMITAS Catering & Serviços atende?"
                    description="Nós atendemos uma ampla variedade de eventos, incluindo eventos corporativos, sociais e institucionais. Desde pequenas reuniões até grandes celebrações, estamos preparados para tornar seu evento memorável."
                />
                <Item
                    title="Como posso fazer um pedido de catering?"
                    description="Para fazer um pedido de catering, entre em contato conosco por telefone ou e-mail. Nossa equipe terá prazer em discutir suas necessidades específicas e fornecer uma cotação personalizada."
                />
                <Item
                    title="Vocês oferecem opções de menu personalizado?"
                    description="Sim, nós oferecemos opções de menu personalizado para atender às suas preferências e restrições alimentares. Nossa equipe trabalhará com você para criar um menu personalizado que atenda às suas necessidades."
                />
                <Item
                    title="Qual é a área de atuação da MARMITAS Catering & Serviços?"
                    description="Nós atuamos principalmente na província de Cabo Delgado, mas também podemos considerar eventos em outras áreas, dependendo da disponibilidade e do escopo do projeto."
                />
            </div>
        </div>
    );
}
