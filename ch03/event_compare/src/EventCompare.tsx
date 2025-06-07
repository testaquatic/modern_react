import React, { useState } from "react";
import "./EventCompare.css"

export default function EventComapre() {
    const [result, setResult] = useState("");

    const handleIn = (e: React.MouseEvent<HTMLElement>) => {
        // [이 글](< https://velog.io/@e_juhee/TypeScript-EventType >)을 보고 `.id`와 관련한 컴파일 오류를 해결했다.
        const targetId = e.target instanceof HTMLElement ? e.target.id : "";
        setResult(r => `${r}Enter: ${targetId}<br />`);
    };
    const handleOut = (e: React.MouseEvent<HTMLElement>) => {
        const targetId = e.target instanceof HTMLElement ? e.target.id : "";
        setResult(r => `${r}Leave: ${targetId}<br />`
        )
    };


    return (
        <>
            <div id="outer" onMouseOver={handleIn} onMouseOut={handleOut}>
                외부 (outer)
                <p id="inner">
                    내부 (inner)
                </p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: result }}></div>
        </>
    )

}
