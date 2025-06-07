import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StyledPanel from './StyltedPanel.tsx'


createRoot(document.getElementById('root')!).render(


  <StrictMode>
    <StyledPanel>
      <p key="title">회원 모집 중!</p>
      <p key="body">위키북스 프로젝트에 오신 것을 환영합니다!!</p>
    </StyledPanel>
  </StrictMode>,
)
