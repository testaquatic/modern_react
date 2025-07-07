import type React from 'react';
import './App.css'

const attrs = {
  href: "https://wings.msn.to",
  download: false,
  target: "_blank",
  rel: "help",
};

const props = {
  color: "White",
  backgroundColor: "Blue",
  padding: 3
};

function App(): React.ReactElement {

  return (
    <>
      <a {...attrs}>지원 페이지로 이동하기</a>
      <p style={props}>WINGS 프로젝트</p>
    </>
  )
}

export default App
