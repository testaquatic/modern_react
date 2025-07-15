
import './App.css'
import books from './books'
import { ListTemplate } from './ListTemplate'

function App() {
  return (
    <ListTemplate src={books} render={(elem) => (
      <>
        <dt>
          <a href={`https://wikibook.co.kr/images/cover/s/${elem.isbn}.jpg`}>
            {elem.title} ({elem.price}원)
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </>
    )} />
  );
}

export default App;
