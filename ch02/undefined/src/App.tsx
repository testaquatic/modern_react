import './App.css'

const dest = "https://ko.react.dev";

function App() {
  return (
    <>
      <ul>
        <li>{true}</li>
        <li>{false}</li>
        <li>{null}</li>
        <li>{undefined}</li>
        <li>{0}</li>
        <li>{NaN}</li>
        <li>{ String(true)}</li>
      </ul>  
      <a href={ dest}>리액트 공식 홈페이지</a>
    </>
  );
}

export default App
