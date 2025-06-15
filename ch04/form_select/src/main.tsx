import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormSelect from './FormSelect'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormSelect />
  </StrictMode>,
)
