import { useState } from "react";

export default function HookCallbackRef() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(show => !show);
    const callbackRef = (elem: HTMLInputElement) => elem?.focus();

    return (
        <>
        <div>
            <label htmlFor="name">이름:</label>
            <input type="text" name="name" id="name" />
        </div>
        <div>
            <label htmlFor="email">이메일 주소:</label>
            <input type="email" name="email" id="email" />
            <button onClick={handleClick}>확장 표시</button>
        </div>
        {
            show && <div>
                <label htmlFor="address">주소:</label>
                <input type="text" name="address" id="address" ref={callbackRef}/>
            </div>
        }
        </>
    );
}