import style from "./styles.module.css";
import { Link } from "react-router-dom";
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

export function Hero() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <strong>
                    Encomende agora e experimente a excelência em cada detalhe!
                </strong>

                <p>
                    Transformamos suas visões em realidade com soluções
                    inovadoras em catering, eventos e fornecimento de produtos.
                    Desde refeições deliciosas e saudáveis até a organização
                    completa de eventos, estamos aqui para garantir a máxima
                    satisfação.
                </p>

                <Link to="/contactar">Nos Contacte</Link>
            </div>
        </div>
    );
}
