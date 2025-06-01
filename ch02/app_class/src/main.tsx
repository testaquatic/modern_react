import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppClass from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppClass></AppClass>
  </StrictMode>,
)
