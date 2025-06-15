import { useState } from "react";

export default function FormSelect() {
    const [form, setForm] = useState({ animal: "dog" });
    
    const handleForm = (e: React.ChangeEvent<HTMLSelectElement>): void => { 
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const show = (): void => {
        console.log(`좋아하는 동물:${form.animal}`);
    };

    return (
        <form>
            <label htmlFor="animal">좋아하는 동물</label>
            <select name="animal" id="animal" value={form.animal} onChange={handleForm}>
                <option value="dog">개</option>
                <option value="cat">고양이</option>
                <option value="hamster">햄스터</option>
                <option value="rabbit">토끼</option>
            </select>
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
}