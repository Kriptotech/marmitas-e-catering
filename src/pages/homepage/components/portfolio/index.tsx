import style from "./styles.module.css";
import { Link } from "react-router-dom";
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

export function Portfolio() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.header}>
                    <strong>PORTFÓLIO DE ESPAÇOS</strong>
                    <p>
                        Opção de realização do evento na sua casa ou empresa,
                        num dos locais do nosso portfolio de espaços, no
                        restaurante Estórias na Casa da Comida ou no Palacete
                        Virtvs.
                    </p>
                    <p>Apoio na contratação de outros espaços.</p>
                </div>

                {/* Desktop Slider  */}
                <div className={style.box_desktop}>
                    <swiper-container
                        slides-per-view="4"
                        space-between="20"
                        scrollbar-clickable="true"
                        mousewheel-invert="true"
                    >
                        <swiper-slide>
                            <div>
                                <span>PALÁCIO MARQUESES</span>
                                <p>Lisboa</p>
                            </div>
                            <Link to="/contactar">DETALHES</Link>
                        </swiper-slide>
                        <swiper-slide>
                            <div>
                                <span>LA DISTILLERIE</span>
                                <p>Lisboa</p>
                            </div>
                            <Link to="/contactar">DETALHES</Link>
                        </swiper-slide>
                        <swiper-slide>
                            <div>
                                <span>CAMÉLIA GARDENS</span>
                                <p>Lisboa</p>
                            </div>
                            <Link to="/contactar">DETALHES</Link>
                        </swiper-slide>
                        <swiper-slide>
                            <div>
                                <span>PALÁCIO MARQUESES</span>
                                <p>Lisboa</p>
                            </div>
                            <Link to="/contactar">DETALHES</Link>
                        </swiper-slide>
                        <swiper-slide>
                            <div>
                                <span>LA DISTILLERIE</span>
                                <p>Lisboa</p>
                            </div>
                            <Link to="/contactar">DETALHES</Link>
                        </swiper-slide>
                        <swiper-slide>
                            <div>
                                <span>CAMÉLIA GARDENS</span>
                                <p>Lisboa</p>
                            </div>
                            <Link to="/contactar">DETALHES</Link>
                        </swiper-slide>
                    </swiper-container>
                </div>

                {/* Mobile Slider  */}
                <div className={style.box_mobile}>
                    <swiper-container
                        slides-per-view="2"
                        space-between="20"
                        scrollbar-clickable="true"
                        mousewheel-invert="true"
                    >
                        <swiper-slide>
                            <div>
                                <span>PALÁCIO MARQUESES</span>
                                <p>Lisboa</p>
                            </div>
                            <Link to="/contactar">DETALHES</Link>
                        </swiper-slide>
                        <swiper-slide>
                            <div>
                                <span>LA DISTILLERIE</span>
                                <p>Lisboa</p>
                            </div>
                            <Link to="/contactar">DETALHES</Link>
                        </swiper-slide>
                        <swiper-slide>
                            <div>
                                <span>CAMÉLIA GARDENS</span>
                                <p>Lisboa</p>
                            </div>
                            <Link to="/contactar">DETALHES</Link>
                        </swiper-slide>
                        <swiper-slide>
                            <div>
                                <span>PALÁCIO MARQUESES</span>
                                <p>Lisboa</p>
                            </div>
                            <Link to="/contactar">DETALHES</Link>
                        </swiper-slide>
                        <swiper-slide>
                            <div>
                                <span>LA DISTILLERIE</span>
                                <p>Lisboa</p>
                            </div>
                            <Link to="/contactar">DETALHES</Link>
                        </swiper-slide>
                        <swiper-slide>
                            <div>
                                <span>CAMÉLIA GARDENS</span>
                                <p>Lisboa</p>
                            </div>
                            <Link to="/contactar">DETALHES</Link>
                        </swiper-slide>
                    </swiper-container>
                </div>
            </div>
        </div>
    );
}
