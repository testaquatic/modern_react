import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventObj from './EventObj'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EventObj />
  </StrictMode>,
)
