
import './App.css'
import books from './books'
import { ForFilter } from './ForFilter'

function App() {
  return (
    <>
      <ForFilter src={books} />
    </>
  );
}

export default App
