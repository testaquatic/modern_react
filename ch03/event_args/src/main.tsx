import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventArgs from './EventArgs'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <EventArgs />
  </StrictMode>,
)
