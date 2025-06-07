import { useEffect, useRef } from "react";
import "./EventPassive.css";

export default function EventPassive() {
    const handleWheel = (e: WheelEvent) => e.preventDefault();

    const divRef: React.Ref<HTMLDivElement> = useRef(null);
    useEffect(() => {
        const div = divRef.current;
        if (div instanceof HTMLDivElement) {
            div.addEventListener("wheel", handleWheel, { passive: false });
        }
        return (() => {
            div?.removeEventListener("wheel", handleWheel);
        })
        
    })

    return (
        <div ref={ divRef} className="box">
            예를 들어 Wheel 이벤트 핸들러에서...
        </div>
    )
}