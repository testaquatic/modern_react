import { useEffect, useState } from "react";

export default function StateEffect({init}: {init: number;}) {
    const [count, setCount] = useState(init);
    const [foo, setFoo] = useState("foo");

    useEffect(() => {
        console.log(`count is ${count}`);
    }, [count]);
    const handleClick = () => setCount(count + 1);

    return (
        <>
        <button onClick={() => setFoo(Date.now().toLocaleString())}>Foo ({foo})</button>
        <button onClick={handleClick}>카운트</button>
        <p>{count}번 클릭되었습니다.</p>
        </>
    );
}