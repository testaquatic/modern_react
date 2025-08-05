import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { LazyBasic } from "./LazyBasic";
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <LazyBasic />
    </StrictMode>,
);
