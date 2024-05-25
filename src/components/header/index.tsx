import { Desktop } from "./desktop";
import { Mobile } from "./mobile";

export function Header() {
    return (
        <div
            style={{
                position: "sticky",
                top: "0px",
                width: "100%",
                zIndex: 20,
                background: "#fff",
            }}
        >
            <Desktop />
            <Mobile />
        </div>
    );
}
