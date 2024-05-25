import { createContext, useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { api } from "../services/api";

type Manager = {
    id: string;
    phone: string;
    name: string;
    email: string;
    role: string;
};

type AuthContextType = {
    manager: Manager | null | undefined;
    setManager: React.Dispatch<
        React.SetStateAction<Manager | null | undefined>
    >;
    recoverManagerData(): Promise<void>;
    isSidebarOpened: boolean;
    setIsSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
    const [manager, setManager] = useState<Manager | null | undefined>(null);
    const [isSidebarOpened, setIsSidebarOpened] = useState(false);

    async function recoverManagerData() {
        let url = `/api/managers/get-manager-data-by-id?manager_id=${manager?.id}`;

        try {
            let response = await api.get(url);

            if (response.data?.success === true) {
                // Encrypt
                var enciptedData = CryptoJS.AES.encrypt(
                    JSON.stringify(response.data?.manager_data),
                    import.meta.env.VITE_CRIPTOJS_SECRET
                ).toString();

                localStorage.setItem("@marmitas-e-catering.app", enciptedData);

                setManager(response.data?.manager_data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function getDataStored() {
        let storedData = localStorage.getItem(
            "@marmitas-e-catering.app"
        ) as string;

        if (storedData) {
            let bytes = CryptoJS.AES.decrypt(
                storedData,
                import.meta.env.VITE_CRIPTOJS_SECRET
            );
            let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

            setManager(decryptedData);
        }
    }

    useEffect(() => {
        getDataStored();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                manager,
                recoverManagerData,
                setManager,
                isSidebarOpened,
                setIsSidebarOpened,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
