import { Header } from "../../components/header";
import { Hero } from "./components/hero";
import { WhatsAppLogo } from "../../components/whatsapp_logo";
import { Footer } from "../../components/footer";
import { AboutUs } from "./components/about_us";
import { useEffect } from "react";

export function AboutPage() {
    document.title = "Sobre a Nós";

    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Hero />
            <AboutUs />
            <Footer />
            <WhatsAppLogo />
        </div>
    );
}
