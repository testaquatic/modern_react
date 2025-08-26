import StyledPanel from "./StyledPanel";
import TitledPanel from "./TitledPanel";


function App() {


  return (
  <>
  <StyledPanel>
    <p>회원 모집 중</p>
    <p>위키북스 프로젝트에 오신 것을 환영합니다!!</p>
  </StyledPanel>
  <TitledPanel>
    <p key="title">회원 모집 중!</p>
    <p key="body">위키북스 프로젝트에 오신 것을 환영합니다!</p>
  </TitledPanel>
  </>
  )
}

export default App
