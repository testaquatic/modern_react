import './App.css'
import type { JSX } from 'react'

function App(): JSX.Element {

  return (
    <>
      {<p>현재 시각: { new Date().toLocaleTimeString() }</p>}
    </>
  )
}

export default App
