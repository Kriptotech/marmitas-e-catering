import { Header } from "../../components/header";
import { Hero } from "./components/hero";
import { WhatsAppLogo } from "../../components/whatsapp_logo";
import { Footer } from "../../components/footer";
import { useEffect } from "react";
import { Form } from "../../components/form";

export function ContactPage() {
    document.title = "Contactar";

    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Hero />
            <Form />
            <Footer />
            <WhatsAppLogo />
        </div>
    );
}
