import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const dest = "https://ko.react.dev";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <a href={dest}>리액트 공식 홈페이지</a>
  </StrictMode>,
)
