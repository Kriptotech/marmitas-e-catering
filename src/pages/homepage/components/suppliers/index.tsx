import style from "./styles.module.css";
import { Square } from "phosphor-react";
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

export function Suppliers() {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <strong>NOSSOS FORNECEDORES</strong>
                <p>
                    Na MARMITAS Catering & Serviços, contamos com fornecedores
                    de confiança que compartilham nossos valores de qualidade e
                    sustentabilidade. A parceria com produtores locais e
                    empresas de renome garante que utilizamos apenas os melhores
                    ingredientes e produtos em nossos serviços.
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
                        <span>Shoprite</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Recheio</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Spar</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Blue</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Handling</span>
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
                        <span>Shoprite</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Recheio</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Spar</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Blue</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Handling</span>
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    );
}
