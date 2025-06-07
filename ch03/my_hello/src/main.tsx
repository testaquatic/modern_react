import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import type { Props } from './Myhello'
import MyHello from './Myhello'

const props: Props = {
  myName: '홍길동',
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyHello {...props}></MyHello>
  </StrictMode>,
)
