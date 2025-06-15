import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormRadio from './FormRadio'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormRadio />
  </StrictMode>,
)
