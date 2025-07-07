
import React from 'react'
import './App.css'

function App(): React.ReactElement {

  const title = "Modern React";

  return (
    React.createElement("div", { className: "main" },
      React.createElement("p", null, `<<${title}>>(김용찬 지음)`),
      React.createElement("img", { src: "https://wikibook.co.kr/images/cover/s/9791158394646.jpg", alt: title }),
      "절찬 판매 중!"
    )
  );
}

export default App
