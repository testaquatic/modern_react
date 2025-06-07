import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ListTemplate from './ListTemplate'
import books from './book'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ListTemplate src={books} render={(elem: BookSrc) => (
      <>
        <dt>
          <a href={`https://wikibook.co.kr/images/cover/s/${elem.isbn}.jpg}`}>
            {elem.title} ({elem.price}원)
          </a>
        </dt>
        <dd>
          {elem.summary}
        </dd>
      </>
    )}>
    </ListTemplate>
  </StrictMode>,
);
