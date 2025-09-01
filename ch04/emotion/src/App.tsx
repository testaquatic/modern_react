import { css, Global } from "@emotion/react";
import { EmotionComp } from "./EmotionComp";
import { EmotionJsx } from "./EmotionJsx";

const global = css`
  body{
    background-color: yellow;
  }`;

function App() {
  return <>
  <Global styles={global} />
  <EmotionJsx />
  <EmotionComp />
  </>;
}

export default App
