import style from "./styles.module.css";
import { Link } from "react-router-dom";
import { ListChecks, Smiley, Square } from "phosphor-react";

export function Experience() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.left}>
                    <span>+ DE 30 CLIENTES SATISFEITOS</span>
                    <strong>+ Experiência</strong>
                    <p>Soluções criadas exclusivamente para o seu negócio.</p>
                    <Link to="/contactar">Explore Nossos Serviços</Link>
                </div>

                <div className={style.right}>
                    <div className={style.item}>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>30 +</span>
                        <p>Eventos</p>
                    </div>
                    <div className={style.item}>
                        <div>
                            <Smiley size={30} weight="fill" />
                        </div>
                        <span>30 +</span>
                        <p>Clientes Satisfeitos</p>
                    </div>
                    <div className={style.item}>
                        <div>
                            <ListChecks size={30} weight="fill" />
                        </div>
                        <span>39 +</span>
                        <p>Projetos Concluídos</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
