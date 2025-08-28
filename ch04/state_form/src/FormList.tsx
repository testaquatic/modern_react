import { useState, type ChangeEvent } from "react";

export function FormList() {
    const [form, setForm] = useState({
        animal: ["dog", "hamster"],
    });

    const handleList = (e: ChangeEvent<HTMLSelectElement>) => {
        const data = [];
        const opts = e.target.options;

        for (const opt of opts)  {
            if (opt.selected) {
                data.push(opt.value);
            }
        }

        setForm({
            ...form,
            [e.target.name]: data,
        });
    }

    const show = () => console.log(`좋아하는 동물: ${form.animal}`);

    return (
        <form action="#">
            <label htmlFor="animal">좋아하는 동물: </label><br />
            <select id="animal" name="animal" multiple onChange={handleList} size={4}>
                <option value="dog">개</option>
                <option value="cat">고양이</option>
                <option value="rabbit">햄스터</option>
                <option value="bird">토끼</option>
            </select>
            <button type="button" onClick={show}>보내기</button>
        </form>
    )
}