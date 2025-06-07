import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventPoint from './EventPoint'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EventPoint />
  </StrictMode>,
)
