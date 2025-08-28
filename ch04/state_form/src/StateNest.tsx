import { useState, type ChangeEvent } from "react";

export function StateNest() {
    const [form, setForm] = useState({
        name: "홍길동",
        address: {
            do: "충청남도",
            city: "태안"
        }
    });

    const handleForm = (e: ChangeEvent<HTMLInputElement>) => setForm({
        ...form,
        [e.target.name]: e.target.value,
    });

    const handleNest = (e: ChangeEvent<HTMLInputElement>) => setForm({
        ...form,
        address: {
            ...form.address,
            [e.target.name]: e.target.value,
        }
    });

    const show = () => console.log(`${form.name} (${form.address.do} ${form.address.city})`);

    return (
        <form action="#">
        <div>
            <label htmlFor="name">이름:</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleForm} />
        </div>
        <div>
            <label htmlFor="do">주소(도):</label>
            <input type="text" name="do" id="do" value={form.address.do} onChange={handleNest} />
        </div>
        <div>
            <label htmlFor="city">주소(시/군/구):</label>
            <input type="text" name="city" id="city" value={form.address.city} onChange={handleNest} />
        </div>
        <div>
            <button type="button" onClick={show}>보내기</button>
        </div>
        </form>
    )
}