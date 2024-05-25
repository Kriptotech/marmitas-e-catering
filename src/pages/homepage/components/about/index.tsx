import img from "./assets/2_Eventos_00012.jpg";
import style from "./styles.module.css";
import { Link } from "react-router-dom";

export function About() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.img_box}>
                    <img src={img} />
                </div>

                <div className={style.content}>
                    <small>SOBRE A EMPRESA</small>
                    <h2>Soluções de Catering e Serviços para Seu Negócio</h2>
                    <p>
                        A MARMITAS Catering & Serviços é especializada em
                        oferecer soluções de alto valor agregado em catering,
                        organização de eventos e fornecimento de produtos.
                        Fundada em 2022 na cidade de Pemba, contamos com uma
                        equipe dedicada e experiente que garante a satisfação
                        total dos nossos clientes.
                    </p>

                    <Link to="/contactar">Nos Contacte</Link>
                </div>
            </div>
        </div>
    );
}
