import axios from "axios";

export function getAPIClient() {
    const api = axios.create({
        baseURL: `${import.meta.env.VITE_SERVER_ENDPOINT}`,
    });

    return api;
}
