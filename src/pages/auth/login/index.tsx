import styles from "./style.module.css";

import { useEffect } from "react";
import { SignInForm } from "./components/form";
import { Header } from "../../../components/header";

export function LoginPage() {
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />

            <div className={styles.container}>
                <div className={styles.box}>
                    <SignInForm />
                </div>
            </div>
        </>
    );
}
