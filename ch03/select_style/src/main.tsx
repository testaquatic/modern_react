import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SelectedStyle from './SelectedStyle'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SelectedStyle mode="dark" />
  </StrictMode>,
)
