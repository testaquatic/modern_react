import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventOnce from './EventOnce'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EventOnce />
  </StrictMode>,
)
