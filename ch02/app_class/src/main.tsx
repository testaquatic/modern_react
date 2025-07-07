import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppClass } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppClass />
  </StrictMode>,
)
