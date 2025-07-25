import type { ChangeEvent, ReactElement } from "react";
import { useImmer } from "use-immer";

export function StateNestImmer(): ReactElement {
    const [form, setForm] = useImmer({
        name: "홍길동",
        address: {
            do: "충청남도",
            city: "태안",
        }
    });

    const handleForm = (e: ChangeEvent<HTMLInputElement>) => setForm((form) => {
        if (e.target.name === "name") {
            form[e.target.name] = e.target.value;
        }
    });

    const handleFormNest = (e: ChangeEvent<HTMLInputElement>) => setForm((form) => {
        if (e.target.name === "do" || e.target.name === "city") {
            form.address[e.target.name] = e.target.value;
        }
    });

    const show = () => console.log(`이름: ${form.name}, 주소: ${form.address.do} ${form.address.city}`);

    return (
        <form action="#" method="post">
            <div>
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleForm} />
            </div>
            <div>
                <label htmlFor="do">도</label>
                <input type="text" id="do" name="do" value={form.address.do} onChange={handleFormNest} />
            </div>
            <div>
                <label htmlFor="city">시군구</label>
                <input type="text" id="city" name="city" value={form.address.city} onChange={handleFormNest} />
            </div>
            <div>
                <button type="button" onClick={show}>확인</button>
            </div>
        </form>
    );
}