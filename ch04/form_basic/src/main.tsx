import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FormBasic } from './FormBasic'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormBasic />
  </StrictMode>,
)
