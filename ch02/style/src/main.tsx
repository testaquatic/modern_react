import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./class.css"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p className='foo'>WINGS 프로젝트</p>
  </StrictMode>,
)
