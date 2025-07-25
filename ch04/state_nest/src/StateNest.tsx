import { useState, type ChangeEvent, type ReactElement } from "react";

export function StateNest(): ReactElement {
    const [form, setForm] = useState({
        name: "홍길동",
        address: {
            do: "충청남도",
            city: "태안",
        }
    });

    const handleForm = (e: ChangeEvent<HTMLInputElement>) => setForm((form) => ({
        ...form,
        [e.target.name]: e.target.value,
    }));

    const handleFormNest = (e: ChangeEvent<HTMLInputElement>) => setForm((form) => ({
        ...form,
        address: {
            ...form.address,
            [e.target.name]: e.target.value,
        }
    }));

    const show = () => console.log(`${form.name} (${form.address.do} ${form.address.city})`);

    return (
        <form action="#" method="post">
            <div>
                <label htmlFor="name">이름:</label>
                <input type="text" name="name" id="name" onChange={handleForm} value={form.name} />
            </div>
            <div>
                <label htmlFor="do">주소(도):</label>
                <input type="text" name="do" id="do" onChange={handleFormNest} value={form.address.do}/>
            </div>
            <div>
                <label htmlFor="city">주소(시/군/구):</label>
                <input type="text" name="city" id="city" onChange={handleFormNest} value={form.address.city} />
            </div>
            <div>
                <button type="button" onClick={show}>보내기</button>
            </div>
        </form>
    );
}