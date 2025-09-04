import HookEffect from "./HookEffect";
import HookTimer from "./HookTimer";
import StateEffect from "./StateEffect";

function App() {
  return (
    <>
    <StateEffect init={0} />
    <HookTimer init={10}/>
    <HookEffect init={10} />
    </>
  )
}

export default App
