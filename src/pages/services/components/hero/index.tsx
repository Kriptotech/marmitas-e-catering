import style from "./styles.module.css";
import { Link } from "react-router-dom";

export function Hero() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <h1>Nossos Serviços</h1>
                <p>
                    Oferecemos uma variedade de serviços para atender às suas
                    necessidades gastronômicas e de eventos. Desde catering
                    personalizado para eventos corporativos e sociais até
                    fornecimento de gêneros alimentares e produtos de limpeza,
                    estamos aqui para ajudar.
                </p>
                <Link to="/contactar">Contactar</Link>
            </div>
        </div>
    );
}
