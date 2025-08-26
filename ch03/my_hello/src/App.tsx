import EventBasic from "./EventBasic";
import MyHello from "./MyHello";
import StateBasic from "./StateBasic";
import { StateParent } from "./StateParent";


function App() {
  return (
    <>
    <MyHello myName="홍길동" />
    <EventBasic type="time"/>
    <StateBasic init={0}/>
    <StateParent />
    </>
  )
}

export default App
