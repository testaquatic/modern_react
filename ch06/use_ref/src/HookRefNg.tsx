import { useState } from "react";

export default function HookRefNg() {
    let id: number | null = null;
    const [count, setCount] = useState(0);

    const handleStart = () => {
        if (id === null) {
            id = setInterval(() => setCount(count => count + 1), 1000);
        }
    };

    const handleEnd = () => {
        if (id !== null) {
            clearInterval(id);
            id = null;
        }
    };

    return (
        <>
            <button onClick={handleStart}>시작</button>
            <button onClick={handleEnd}>종료</button>
            <p>{count}초 경과</p>
        </>
    );
}