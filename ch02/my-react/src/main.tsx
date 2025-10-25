import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root")!);

setInterval(() => {
    root.render(
        <StrictMode>
            <p>현재 시작 : {new Date().toLocaleString()}</p>
        </StrictMode>,
    );
}, 1000);
