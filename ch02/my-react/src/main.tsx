import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = createRoot(document.getElementById('root')!)

setInterval(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}, 1000);
