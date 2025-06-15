import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormCheck from './FormCheck'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormCheck />
  </StrictMode>,
)
