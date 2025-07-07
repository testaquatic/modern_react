
import './App.css'

function App() {

  const content = `<h3>WINGS 프로젝트</h3><img src="https://wings.msn.to/image/wings.jpg" />`;

  return (
    <>
      <p>{content}</p>
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </>
  )
}

export default App
