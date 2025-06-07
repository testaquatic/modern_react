import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventBasic from './EventBasic'

const dateType: DateType = {
  type: "time"
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EventBasic {...dateType}></EventBasic>
  </StrictMode>,
)
