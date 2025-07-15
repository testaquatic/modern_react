import { useEffect, useRef, type Ref } from "react";
import "./EventPassive.css"

export function EventPassive() {
  const handleWheel = (e: WheelEvent) => e.preventDefault();
  const divRef: Ref<HTMLDivElement|null> = useRef(null);
  useEffect(() => {
    if (!divRef.current) {
      return;
    }

    const div = divRef.current;
    div.addEventListener("wheel", handleWheel, {passive: false})
    
    return (() => { div.removeEventListener("wheel", handleWheel); });
  })

  return (
    <div ref={divRef} className="box">예를 들어 Wheel 이벤트 핸들러에서...</div>
  );
}