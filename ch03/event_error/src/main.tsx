import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventError from './EventError'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EventError src="./images/wings.jpg" alt ="샘플 이미지" />
  </StrictMode>,
)
