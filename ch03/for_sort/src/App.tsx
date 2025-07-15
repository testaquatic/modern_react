
import type React from 'react';
import './App.css'
import books from './books';
import { ForSort } from './ForSort';

function App(): React.ReactElement {
  return (
    <ForSort src={books} />
  );
}

export default App
