import { EventArgs } from "./EventArgs";
import { EventArgs2 } from "./EventArgs2";
import { EventCompare } from "./EventCompare";
import EventError from "./EventError";
import { EventKey } from "./EventKey";
import { EventObj } from "./EventObj";
import { EventOnce } from "./EventOnce";
import  { EventPassive } from "./EventPassive";
import { EventPoint } from "./EventPoint";
import { EventPropagation } from "./EventPropagation";
import { EventMouse } from "./MouseEvent";

function App() {
  return (
    <>
    <EventMouse alt="로고 이미지" beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif" afterSrc="https://www.web-deli.com/image/home_chara.gif"/>
    <EventCompare />
    <EventError src="/wings.jpg" alt="샘플이미지" />
    <EventObj />
    <EventPoint />
    <EventKey />
    <EventArgs />
    <EventArgs2 />
    <EventPropagation />
    <EventOnce />
    <EventPassive />
    </>
  )
}

export default App
