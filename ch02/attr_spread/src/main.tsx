import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const attrs = {
  href: "https://wings.msn.to",
  download: false,
  target: "_blank",
  rel: "help",
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <a href={attrs.href} download={attrs.download} target={attrs.target} rel={attrs.rel}>지원 페이지로 이동하기</a>
    <a {...attrs}>지원 페이지로 이동하기</a>
  </StrictMode>,
)
