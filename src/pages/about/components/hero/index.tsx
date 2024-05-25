import style from "./styles.module.css";
import { Link } from "react-router-dom";

export function Hero() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <h1>Sobre a Nós</h1>
                <p>
                    Descubra o que nos torna a escolha preferida de tantos
                    clientes
                </p>
                <Link to="/contactar">Contactar</Link>
            </div>
        </div>
    );
}
