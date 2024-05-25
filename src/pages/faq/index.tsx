import { Header } from "../../components/header";
import { Hero } from "./components/hero";
import { WhatsAppLogo } from "../../components/whatsapp_logo";
import { Footer } from "../../components/footer";
import { Main } from "./components/main";
import { useEffect } from "react";

export function FAQPage() {
    document.title = "Perguntas Frequentes";

    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Hero />
            <Main />
            <Footer />
            <WhatsAppLogo />
        </div>
    );
}
