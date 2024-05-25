import style from "./styles.module.css";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.row}>
                <div>
                    <span>MARMITAS Catering & Serviços</span>
                    <p>Av. Albeto Joaquim Chipande, Bairro Eduardo Mondlane</p>
                    <p>Cidade de Pemba, Moçambique</p>
                    <Link to="tel:+258855989895">(+258) 855989895</Link>
                    <Link to="mailto:m.cateringservicos@gmail.com">
                        m.cateringservicos@gmail.com
                    </Link>

                    <br />
                    <br />

                    <span>Outras Informações</span>
                    <p>
                        Estamos disponíveis de segunda a sexta-feira, das 8h às
                        18h.
                    </p>
                    <Link to="tel:+258855989895">(+258) 855989895</Link>
                    <Link to="mailto:m.cateringservicos@gmail.com">
                        m.cateringservicos@gmail.com
                    </Link>
                </div>

                <div>
                    <span>Outros Links</span>
                    <Link to="/">Inicio</Link>
                    <Link to="/sobre">Sobre Nós</Link>
                    <Link to="/servicos">Nossos Serviços</Link>
                    <Link to="/contactar">Contactar</Link>
                </div>
            </div>

            <div className={style.bottom}>
                © 2024 MARMITAS Catering & Serviços
            </div>
        </footer>
    );
}
