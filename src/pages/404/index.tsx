import { Link } from "react-router-dom";
import style from "./styles.module.css";
import { useEffect } from "react";

export function PageNotFound() {
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={style.container}>
            <div className={style.box}>
                <h1>Erro 404...</h1>
                <span>Aviso:</span>
                <p>
                    Paece que a página que você requisitou não foi encontrada.
                </p>
                <Link to="/">RETORNAR À PÁGINA INICIAL</Link>
            </div>
        </div>
    );
}
