import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StateForm from './StateForm'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateForm />
  </StrictMode>,
)
