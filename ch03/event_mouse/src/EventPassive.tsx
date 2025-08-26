import { useEffect, useRef } from "react";
import "./EventPassive.css"


export function EventPassive() {
    const handleWheel = (e: WheelEvent) => e.preventDefault();
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const div = divRef.current;
        div?.addEventListener("wheel", handleWheel, {passive: false});
        
        return () => div?.removeEventListener("wheel", handleWheel);        
    })

    return(
        <div ref={divRef} className="box" >
            예를 들어 Wheel 이벤트를 핸들러에서...
        </div>
    );
}