import { useRef, type ReactElement, type Ref } from "react";

export function StateFormUC(): ReactElement {
    const name: Ref<HTMLInputElement> = useRef(null);
    const age: Ref<HTMLInputElement> = useRef(null);

    const show = () => console.log(`안녕하세요. ${name.current?.value} (${age.current?.value}) 님!`);

    return (
        <form action="#" method="post">
            <div>
                <label htmlFor="name">이름:</label>
                <input type="text" name="name" id="name" ref={name} defaultValue="홍길동" />
            </div>
            <div>
                <label htmlFor="age">나이:</label>
                <input type="text" name="age" id="age" ref={age} defaultValue="18" />
            </div>
            <div>
                <button type="button" onClick={show}>보내기</button>
            </div>
        </form>
    );
}