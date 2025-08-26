import type { KeyboardEvent } from "react";

export function EventKey() {
    const handleKey = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.key === 'q') {
            alert("이름은 20자 이내로 입력해주세요.");
        }
    }

    return(
        <>
        <form action="#">
            <label htmlFor="name">이름:</label>
            <input type="text" name="name" id="name" size={20} onKeyDown={handleKey} />
        </form>
        </>
    )
}