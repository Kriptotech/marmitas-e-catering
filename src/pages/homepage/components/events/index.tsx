import style from "./styles.module.css";
import img1 from "./assets/2_Eventos_00022-oytyqlsm844a8s9vbq97bgl9uujdccp3s04lscvjvc.jpg";
import img2 from "./assets/2_Eventos_00024-oz6zrabsd5z3n6byn84lvo4ptg3bnhpn7f142lsh20.jpg";
import img3 from "./assets/3_VIRTVS_MBERK_2126-oytzf86f8vtod2icjvee4qwy176hyxfzhvbhcadavs.jpg";

export function Events() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.header}>
                    <strong>EVENTO EM 3 PASSOS</strong>
                    <p>Em três passos concretizamos a sua ideia.</p>
                    <p>
                        O planeamento é simples e a solução é desenhada à sua
                        medida.
                    </p>
                </div>

                <div className={style.row}>
                    <div className={style.item}>
                        <div className={style.img_box}>
                            <img src={img1} alt="" />
                        </div>
                        <span>A SUA IDEIA</span>
                        <p>
                            Reunião para definição do tipo de evento, número de
                            convidados e serviços pretendidos.
                        </p>
                    </div>
                    <div className={style.item}>
                        <div className={style.img_box}>
                            <img src={img2} alt="" />
                        </div>
                        <span>A NOSSA PROPOSTA</span>
                        <p>
                            Apresentação da proposta, realização de ajustes,
                            adjudicação e reserva de sessão de degustação.
                        </p>
                    </div>
                    <div className={style.item}>
                        <div className={style.img_box}>
                            <img src={img3} alt="" />
                        </div>
                        <span>A CONCRETIZAÇÃO</span>
                        <p>
                            Planeamento rigoroso e tomada das diligências
                            necesssárias à realização do evento.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
