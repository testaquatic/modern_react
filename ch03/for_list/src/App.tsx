
import './App.css'
import books from './books'
import { ForList } from './ForList'

function App() {


  return (
    <>
      <ForList src={books} />
    </>
  );
}

export default App
