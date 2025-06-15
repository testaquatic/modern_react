import { useState, type JSX } from "react"

export function StateNest(): JSX.Element {
    const [form, setForm] = useState({
        name: "홍길동",
        address: {
            do: "충청남도",
            city: "태안",
        },
    });

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormNest = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            address: {
                ...form.address,
                [e.target.name]: e.target.value,
            },
        });
    };

    const show = () => {
        console.log(`${form.name} (${form.address.do} ${form.address.city})`);
    }


    return (
        <form>
            <div>
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" onChange={handleForm} value={form.name} />
            </div>
            <div>
                <label htmlFor="do">주소(도)</label>
                <input type="text" id="do" name="do" onChange={handleFormNest} value={form.address.do} />
            </div>
            <div>
                <label htmlFor="city">주소(시/군/구)</label>
                <input type="text" id="city" name="city" onChange={handleFormNest} value={form.address.city} />
            </div>
            <div>
                <button type = "button" onClick={show}>확인</button>
            </div>
        </form>
    )
}