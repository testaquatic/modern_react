import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormList from './FormList'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormList />
  </StrictMode>,
)
