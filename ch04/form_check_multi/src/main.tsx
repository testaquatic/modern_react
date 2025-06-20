import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormCheckMulti from './FormCheckMulti'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormCheckMulti />
  </StrictMode>,
)
