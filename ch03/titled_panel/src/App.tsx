import type React from 'react';
import './App.css'
import { TitledPanel } from './TitledPanel';

function App(): React.ReactElement {
  return (
    <TitledPanel>
      <p key="title">회원 모집 중!</p>
      <p key="body">위키북스 프로젝트에 오신 것을 환영합니다!!</p>
    </TitledPanel>
  );
}

export default App
