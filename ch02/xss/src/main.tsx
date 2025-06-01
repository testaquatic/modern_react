import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
const content = ` <h3>WINGS 프로젝트</h3>
<img src="https://wings.msn.to/image/wings.jpg" />`;


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p dangerouslySetInnerHTML={{ __html: content }}></p>
  </StrictMode>
)
