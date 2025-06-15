import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StateNest } from './StateNest'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateNest />
  </StrictMode>,
)
