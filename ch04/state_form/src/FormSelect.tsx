import { useState, type ChangeEvent } from "react";

export function FormSelect() {
    const [form, setForm] = useState({
        animal: "dog",
    });

    const handleForm = (e: ChangeEvent<HTMLSelectElement>) => setForm({
        ...form,
        [e.target.name]: e.target.value,
    });

    const show = () => console.log(`좋아하는 동물: ${form.animal}`);

    return (
        <form action="#">
            <label htmlFor="animal">좋아하는 동물: </label>
            <select id="animal" name="animal" value={form.animal} onChange={handleForm}>
                <option value="dog">개</option>
                <option value="cat">고양이</option>
                <option value="rabbit">햄스터</option>
                <option value="bird">토끼</option>
            </select>
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
}