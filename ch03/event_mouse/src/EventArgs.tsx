import type { MouseEvent } from "react";

export function EventArgs() {
    const current = (e: MouseEvent & {target: {id?: string}}, type: string) => {
        const d = new Date();
        switch (type) {
            case "date":
                console.log(`${e.target.id}: ${d.toLocaleDateString()}`);
                break;
            case "time":
                console.log(`${e.target.id}: ${d.toLocaleTimeString()}`);
                break; 
            default:
                console.log(`${e.target.id}: ${d.toLocaleString()}`);
                break;
        }
    };

    return (
        <div>
            <button id="dt" onClick={(e) => current(e, "datetime")}>햔재 날짜 및 시각</button>
            <button id="date" onClick={(e) => current(e, "date")}>현재 날짜</button>
            <button id="time" onClick={(e) => current(e, "time")}>현재 시각</button>
        </div>
    )
}