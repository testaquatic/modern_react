import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StateParent from './StateParent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateParent />
  </StrictMode>,
)
