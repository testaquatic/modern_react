import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventPropagation from './EventPropagation'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EventPropagation />
  </StrictMode>,
)
