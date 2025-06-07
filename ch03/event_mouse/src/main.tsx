import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventMouse from './EventMouse'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EventMouse alt= "로고이미지" beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif" afterSrc="https://www.web-deli.com/image/home_chara.gif"></EventMouse>
  </StrictMode>,
)
