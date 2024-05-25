import style from "./styles.module.css";
import { Square } from "phosphor-react";
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

export function Clients() {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <strong>Confira alguns dos nossos parceiros e clientes.</strong>
                <p>
                    Na MARMITAS Catering & Serviços, temos o orgulho de atender
                    uma variedade de clientes, desde empresas renomadas até
                    eventos sociais íntimos. Cada projeto é uma oportunidade
                    para mostrar nosso compromisso com a excelência e a
                    satisfação do cliente.
                </p>
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
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Plan</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>CRS</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>JRS</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Cade, lda.</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>ID Grow Solutions Lda</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Instituto de amendoas de moçambique</span>
                    </swiper-slide>
                </swiper-container>
            </div>

            {/* Mobile Slider  */}
            <div className={style.box_mobile}>
                <swiper-container slides-per-view="2" space-between="20">
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Plan</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>CRS</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>JRS</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Cade, lda.</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>ID Grow Solutions Lda</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Instituto de amendoas de moçambique</span>
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    );
}
