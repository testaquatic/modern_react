import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>{"Tom &amp; Jerry"}</div>
    <div>Tom &amp; Jerry</div>
    <div>{"Tom \u0026 Jerry"}</div>
    <div>{`Tom ${String.fromCodePoint(38)} Jerry`}</div>
    <div dangerouslySetInnerHTML={{ __html: 'Tom &amp; Jerry' }}></div>
  </StrictMode>,
)
