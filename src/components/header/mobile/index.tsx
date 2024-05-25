import { useState } from "react";
import { List, User, X } from "phosphor-react";

import style from "./styles.module.css";
import { Link } from "react-router-dom";

export function Mobile() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <header className={style.header}>
            <nav>
                <Link to="/">
                    <img src="/logo_transparent.png" />
                </Link>

                <div onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? (
                        <X weight="bold" size={35} color={"#444"} />
                    ) : (
                        <List weight="bold" size={35} color={"#444"} />
                    )}
                </div>
            </nav>

            {isVisible && (
                <div className={style.links}>
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
            )}
        </header>
    );
}
