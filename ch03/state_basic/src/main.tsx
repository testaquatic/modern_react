import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StateBasic from './StateBasic'

const stateInit: StateInit = {
  init: 0,
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateBasic {...stateInit} />
  </StrictMode>,
)
