import { useState } from "react";

export function EventOnce() {
    const [clicked, setClicked] = useState(false);
    const [result, setResult] = useState<number | string>("_");
    const handleClick = () => {
        if (!clicked) {
            setResult(Math.floor(Math.random() * 100) + 1);
            setClicked(true);
        }
    };

    return (
        <>
        <button onClick={handleClick}>결과 보기</button>
        <p>오늘의 운세는 {result}점입니다.</p>
        </>
    )
}