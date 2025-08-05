import { css, Global } from "@emotion/react";
import "./App.css";
import { EmotionComp } from "./EmotionComp";

const global = css`
    body {
        background-color: yellow;
    }
`;

function App() {
    return (
        <>
            <Global styles={global} />
            <EmotionComp />
        </>
    );
}

export default App;
