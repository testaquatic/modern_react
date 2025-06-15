import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormTestarea from './FormTextarea.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormTestarea />
  </StrictMode>,
)
