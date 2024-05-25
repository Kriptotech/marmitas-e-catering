import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import CryptoJS from "crypto-js";

import { AuthContext } from "../../../../../context/AuthContext";
import { api } from "../../../../../services/api";

export function SignInForm() {
    const navigate = useNavigate();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { setManager } = useContext(AuthContext);

    async function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsLoading(true);
        return;
        if (isLoading) return;
        setIsLoading(true);

        let obj = {
            password: Password,
            email: Email,
        };

        try {
            let response = await api.post("/api/managers/signin", obj);

            if (response.data?.success === true) {
                let user = {
                    id: response.data?.manager_data?.id,
                    name: response.data?.manager_data?.name,
                    phone: response.data?.manager_data?.phone,
                    email: response.data?.manager_data?.email,
                    role: response.data?.manager_data?.role,
                } as any;

                // Encrypt
                var enciptedData = CryptoJS.AES.encrypt(
                    JSON.stringify(user),
                    import.meta.env.VITE_CRIPTOJS_SECRET
                ).toString();

                localStorage.setItem("@marmitas-e-catering.app", enciptedData);

                setManager(user);

                navigate("/dashboard");
            }
            if (response.data?.success === false) {
                Swal.fire({
                    title: "ALERTA!",
                    text: response.data?.display_message,
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: "Erro!",
                text: "Erro ao fazer login",
                icon: "error",
                confirmButtonText: "OK",
            });
        }

        setIsLoading(false);
    }

    return (
        <form className={styles.form} onSubmit={(event) => handleSignIn(event)}>
            <div className={styles.input_box}>
                <label htmlFor="email">
                    Email<span>*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="email@company.com"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className={styles.input_box}>
                <label htmlFor="password">
                    Password<span>*</span>
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="************"
                    required
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button>
                {isLoading ? <PulseLoader color="white" size={10} /> : "Log In"}
            </button>
        </form>
    );
}
