import HookReducer from "./HookReducer";
import HookReducerInit from "./HookReducerInit";
import HookReducerUp from "./HookReducerUp";


function App() {
  return (
    <>
    <HookReducer init={0} />
    <HookReducerUp init={0} />
    <HookReducerInit init={0} />
    </>
  );
}

export default App
