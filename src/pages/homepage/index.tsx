import { Header } from "../../components/header";
import { Hero } from "./components/hero";
import { WhatsAppLogo } from "../../components/whatsapp_logo";
import { Footer } from "../../components/footer";
import { useEffect } from "react";
import { About } from "./components/about";
import { Portfolio } from "./components/portfolio";
import { Events } from "./components/events";
import { Form } from "../../components/form";
import { Experience } from "./components/experience";
import { Suppliers } from "./components/suppliers";
import { Clients } from "./components/clients";
import { Feedback } from "./components/feedback";

export function Homepage() {
    document.title = "Marmitas Catering";

    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <Suppliers />
            <About />
            <Experience />
            <Portfolio />
            <Clients />
            <Feedback />
            <Events />
            <Form />
            <Footer />
            <WhatsAppLogo />
        </>
    );
}
