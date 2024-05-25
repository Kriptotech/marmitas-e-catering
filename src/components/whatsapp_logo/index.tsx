import style from "./styles.module.css";
import { WhatsappLogo } from "phosphor-react";

export function WhatsAppLogo() {
    return (
        <a
            href="https://api.whatsapp.com/send?1=pt_br&phone=258865504448"
            className={style.container}
        >
            <WhatsappLogo size={40} weight="fill" color="white" />
        </a>
    );
}
