import type { JSX } from 'react';
import './App.css'
import { EventError } from './EventError'

function App():JSX.Element {
  return (
    <>
      <EventError src="./image/wings.jpg" alt="샘플 이미지" />
    </>
  );
}

export default App
