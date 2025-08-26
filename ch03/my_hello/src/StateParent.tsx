import { useState } from "react";
import { StateCounter } from "./StateCounter";

export function StateParent() {
    const [count, setCount] = useState(0);
    const update = (step: number) => setCount((count) => count + step);

    return (
        <>
        <p>총 개수: {count}</p>
        <StateCounter step={1} onUpdate={update} />
        <StateCounter step={5} onUpdate={update} />
        <StateCounter step={-1} onUpdate={update} />
        </>
    )
    
}