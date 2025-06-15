import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FormFile } from './FormFile'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormFile></FormFile>
  </StrictMode>,
)
