import { useState, type PropsWithChildren } from "react";

type StateBasicProps = PropsWithChildren & {init: number};

export default function StateBasic({init}: StateBasicProps) {
    const [count, setCount] = useState(init);
    console.log(`count is ${count}`);

    const handleClick = () => {
        setCount((count) => count + 1);
        setCount((count) => count + 1);
    };

    return (
        <>
        <button onClick={handleClick}>카운트</button>
        <p>{count}번 클릭했습니다.</p>
        </>
    )
}