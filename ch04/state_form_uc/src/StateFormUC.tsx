import { useRef } from "react";

export default function StateFromUC() {
    const name: React.Ref<HTMLInputElement> = useRef(null);
    const age: React.Ref<HTMLInputElement> = useRef(null);
    
    const show = () => {
        console.log(`안녕하세요, ${name.current?.value} (${age.current?.value}세) 님!`);
    };

    return (
        <form>
            <div>
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" ref={name} defaultValue={"홍길동"} />
            </div>
            <div>
                <label htmlFor="age">나이</label>
                <input type="number" id="age" name="age" ref={age} defaultValue={18} />
            </div>
            <div>
                <button type="button" onClick={show}>보내기</button>
            </div>
        </form>
    )
}