import styles from "./styles.module.css";
import { Header } from "./components/header";
import { Item } from "./components/item";

import img1 from "./assets/testi1.jpg";
import img2 from "./assets/testi2.jpg";
import img3 from "./assets/testi3.jpg";

export function Feedback() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <Header />

                <div className={styles.row}>
                    <Item
                        image={img1}
                        description="A MARMITAS Catering & Serviços superou todas as nossas expectativas. A qualidade dos alimentos e a eficiência do serviço foram excepcionais. Recomendo fortemente!"
                        name="João Silva"
                    />
                    <Item
                        image={img2}
                        description="A equipe da MARMITAS Catering & Serviços foi extremamente profissional e atenciosa. Desde o planejamento até a execução do evento, tudo foi perfeito. Obrigada por tornarem nosso evento um sucesso!"
                        name="Maria Fernandes"
                    />
                    <Item
                        image={img3}
                        description="Trabalhar com a MARMITAS Catering & Serviços foi uma experiência incrível. A comida estava deliciosa e a equipe foi muito prestativa. Sem dúvida, escolheremos seus serviços novamente para futuros eventos."
                        name="Carlos Oliveira"
                    />
                </div>
            </div>
        </div>
    );
}
