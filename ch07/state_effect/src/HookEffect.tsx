import { useEffect, useState } from "react";

const sleep = (delay: number) => {
    const start = Date.now();
    while (Date.now() - start < delay){/* VOID */}
};

export default function HookEffect({init}: {init: number;}){
    const [count, setCount] = useState(0);

    useEffect(() => {
        sleep(2000);
        setCount(init);
    }, []);

    const handleClick = () => setCount(count + 1);

    return (
        <>
        <button onClick={handleClick}>카운트</button>
        <p>{count}번 클릭되었습니다.</p>
        </>
    )
}