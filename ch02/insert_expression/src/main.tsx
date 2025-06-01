import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const name = "홍길동";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p>안녕하세요, {name} 입니다!</p>
  </StrictMode>,
)
