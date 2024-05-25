import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { PageNotFound } from "./pages/404";
import { Homepage } from "./pages/homepage";
import { AboutPage } from "./pages/about";
import { ServicesPage } from "./pages/services";
import { ContactPage } from "./pages/contact";
import { FAQPage } from "./pages/faq";
import { AuthProvider } from "./context/AuthContext";
import { LoginPage } from "./pages/auth/login";

const router = createBrowserRouter([
    {
        path: "*",
        element: <PageNotFound />,
    },
    { path: "/", element: <Homepage /> },
    {
        path: "/sobre",
        element: <AboutPage />,
    },
    {
        path: "/servicos",
        element: <ServicesPage />,
    },
    {
        path: "/contactar",
        element: <ContactPage />,
    },
    {
        path: "/perguntas",
        element: <FAQPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
