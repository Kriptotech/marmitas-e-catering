import style from "./styles.module.css";
import { Square } from "phosphor-react";
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

export function Services() {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <p>
                    Deixe-nos cuidar dos detalhes enquanto você aproveita seu
                    evento ou refeição. Entre em contato conosco para saber mais
                    sobre nossos serviços e como podemos ajudá-lo.
                </p>
            </div>

            {/* Desktop Slider  */}
            <div className={style.box_desktop}>
                <swiper-container
                    slides-per-view="3"
                    space-between="20"
                    scrollbar-clickable="true"
                    mousewheel-invert="true"
                >
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Catering</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Organização de Eventos</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>
                            Fornecimento de Gêneros Alimentares e Produtos de
                            Limpeza
                        </span>
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
                        <span>Catering</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>Organização de Eventos</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <Square size={30} weight="fill" />
                        </div>
                        <span>
                            Fornecimento de Gêneros Alimentares e Produtos de
                            Limpeza
                        </span>
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    );
}
