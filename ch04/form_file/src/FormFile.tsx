import { useRef, type RefObject } from "react";

export function FormFile() {
    const file:RefObject<HTMLInputElement> | RefObject<null> = useRef(null);

    function show() {
        const fs = file.current?.files;
        if (!fs) {
            return;
        }
        for (const f of fs) {
            console.log(`파일명:${f.name}`);
            console.log(`종류:${f.type}`);
            console.log(`크기:${Math.trunc(f.size / 1024)}KB`);
        }
    }

    return (
        <form>
            <input type="file" ref={file} multiple />
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
}