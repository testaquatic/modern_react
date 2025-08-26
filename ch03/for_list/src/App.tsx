import books from "./books";
import ForFilter from "./ForFilter";
import ForList from "./ForList";
import ForNest from "./ForNest";
import ForSort from "./ForSort";
import { ListTemplate } from "./ListTemplate";

function App() {
  return (
    <>
    <ForList src={books} />
    <ForNest src={books} />
    <ForFilter src={books} />
    <ForSort src={books} />
    <ListTemplate src={books} render={(elem: typeof books[number]) => (
        <>
          <dt><a href={`https://wikibook.co.kr/images/cover/s/${elem.isbn}.jpg`}>{elem.title} ({elem.price}원)</a></dt>
          <dd>{elem.summary}</dd>
        </>
      )} />
    </>
  )
}

export default App
