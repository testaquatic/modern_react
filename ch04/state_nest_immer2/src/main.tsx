import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StateNestImmer2 } from './StateNestImmer2'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateNestImmer2 />
  </StrictMode>,
)
