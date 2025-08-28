import { useRef } from "react";

export function FormFile() {
    const file = useRef<HTMLInputElement>(null);

    const show = () => {
        const fs = file.current?.files;
        for (const f of fs??[]) {
            console.log(`파일명:${f.name}`);
            console.log(`종류:${f.type}`);
            console.log(`크기:${Math.trunc(f.size/1024)}KiB`);
        }
    };

    return (
        <form action="#">
            <input type="file" ref={file} multiple />
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
}