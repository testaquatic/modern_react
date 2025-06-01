import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ul>
      <li>{ true }</li>
      <li>{false}</li>
      <li>{undefined}</li>
      <li>{null}</li>
      <li>{NaN}</li>
      <li>{0}</li>
      <li>{ String(true)}</li>
    </ul>
  </StrictMode>,
)
