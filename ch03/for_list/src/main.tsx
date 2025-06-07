import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import books from './books.ts'
import ForNest from './ForNest.tsx';

const bookSrc: BookSrc = {
  src: books
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ForNest {...bookSrc} />
  </StrictMode>,
)
