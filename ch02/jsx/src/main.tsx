import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const title = "모던 리액트 Deep Dive";

createRoot(document.getElementById('root')!).render(
  React.createElement(
    "div", { className: "main" },
      React.createElement(
        "p", null,
        `<<${title}>> (김용찬 지음) `
      ),
    React.createElement(
      "img", { src: "https://wikibook.co.kr/images/cover/s/9791158394646.jpg", alt: title},
    ),
    '절찬 판매 중!',
  )
)