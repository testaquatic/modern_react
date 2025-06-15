import React, { useState } from "react";

export default function FormList() {
    const [form, setForm] = useState({
        animal: ["dog", "hamster"],
    });

    const handleFromList = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const data = [];
        const opts = e.target.options;

        for (const opt of opts) {
            if (opt.selected) { 
                data.push(opt.value);
            }
        }

        setForm({
            ...form,
            [e.target.name]: data
        });
    };

    const show = () => console.log(`좋아하는 동물:${form.animal}`);

    return (
        <form>
            <label htmlFor="animal">좋아하는 동물</label>
            <select name="animal" id="animal" value={form.animal} size={4} multiple={true} onChange={handleFromList}>
                <option value="dog">개</option>
                <option value="cat">고양이</option>
                <option value="hamster">햄스터</option>
                <option value="rabbit">토끼</option>
            </select>
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
}