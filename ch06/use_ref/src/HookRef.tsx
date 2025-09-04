import { useRef, useState } from "react";

export default function HookRef() {
    const id = useRef<number>(null);
    const [count, setCount] = useState(0);

    const handleStart = () => {
        if (id.current === null) {
            id.current = setInterval(() => setCount(count => count + 1), 1000);
        }
    };

    const handleEnd = () => {
        if (id.current !== null) {
            clearInterval(id.current);
            id.current = null;
        }
    }

    return (
        <>
            <button onClick={handleStart}>시작</button>
            <button onClick={handleEnd}>종료</button>
            <p>{count}초 경과</p>
        </>
    )
}