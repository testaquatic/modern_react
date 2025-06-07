import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventPassive from './EventPassive'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EventPassive />
  </StrictMode>,
)
