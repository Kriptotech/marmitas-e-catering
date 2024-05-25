import { Link } from "react-router-dom";
import { User } from "phosphor-react";

import style from "./styles.module.css";

export function Desktop() {
    return (
        <header className={style.header}>
            <nav>
                <img src="/logo_transparent.png" />
                <div>
                    <Link to="/">Inicio</Link>
                    <Link to="/sobre">Sobre Nós</Link>
                    <Link to="/servicos">Nossos Serviços</Link>
                    <Link to="/perguntas">Perguntas Frequentes</Link>
                    <Link to="/contactar">Contactar</Link>
                    <Link to="/login">
                        <User size={20} weight="fill" />
                        Fazer Login
                    </Link>
                </div>
            </nav>
        </header>
    );
}
