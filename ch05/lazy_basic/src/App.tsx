import { LazyBasic } from "./LazyBasic";
import { LazyMulti } from "./LazyMulti";
import { SuspenseResult } from "./SuspenseResult";
import { SuspenseSimple } from "./SuspenseSimple";


function App() {
  return (
    <>
    <LazyBasic />
    <LazyMulti />
    <SuspenseSimple />
    <SuspenseResult />
    </>
  )
}

export default App
