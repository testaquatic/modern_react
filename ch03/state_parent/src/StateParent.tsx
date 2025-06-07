import React from "react";
import StateCounter from "./StateCounter";

export default function StateParent(): React.ReactNode {
    const [count, setCount] = React.useState(0);
    const update = (step: number): void => setCount(c => c + step);

    return (
        <>
            <p>총 개수: {count}</p>
            <StateCounter step={1} onUpdate={update} />
            <StateCounter step={5} onUpdate={update} />
            <StateCounter step={-1} onUpdate={update} />
        </>
    )
}