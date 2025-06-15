import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StateNestImmer } from './StateNestImmer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateNestImmer />
  </StrictMode>,
)
