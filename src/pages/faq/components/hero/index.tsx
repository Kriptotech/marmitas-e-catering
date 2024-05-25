import style from "./styles.module.css";
import { Link } from "react-router-dom";

export function Hero() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <h1>Perguntas Frequentes</h1>
                <p>
                    Perguntas feitas regularmente pelos nossos
                    clientes.
                </p>
                <Link to="/contactar">Contactar</Link>
            </div>
        </div>
    );
}
