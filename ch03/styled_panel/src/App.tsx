
import type { JSX } from 'react'
import './App.css'
import { StyledPanel } from './StyledPanel'

function App(): JSX.Element {
  return (
    <StyledPanel>
      <p>회원 모집 중!</p>
      <p>위키북스 프로젝트에 오신 것을 환영합니다!!</p>
    </StyledPanel>
  )
}

export default App
