import { Header } from "../../components/header";
import { Hero } from "./components/hero";
import { WhatsAppLogo } from "../../components/whatsapp_logo";
import { Footer } from "../../components/footer";
import { Services } from "./components/services";
import { useEffect } from "react";

export function ServicesPage() {
    document.title = "Serviços";

    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Footer />
            <WhatsAppLogo />
        </div>
    );
}
