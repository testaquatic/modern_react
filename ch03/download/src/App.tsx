
import './App.css'
import books from './books';
import { ForItem } from './ForItem';

function App() {
  return (
    <dl>
      {books.map((book) => <ForItem key={book.isbn} book={book} />)}
    </dl>
  );
}

export default App
