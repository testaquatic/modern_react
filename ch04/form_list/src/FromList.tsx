import { useState, type ChangeEvent, type ReactElement } from "react";

export function FormList(): ReactElement {
    const [from, setForm] = useState({
        animal: ["dog", "hamster"],
    });

    const handleFormList = (e: ChangeEvent<HTMLSelectElement>) => {
        const data: string[] = [];
        const opts = e.target.options;
        for (const opt of opts) {
            if (opt.selected) {
                data.push(opt.value);
            }
        }

        setForm((form) => {
            return {
                ...form,
                [e.target.name]: data,
            }
        });
    };

    const show = () => console.log(`좋아하는 동물: ${from.animal}`);

    return (
        <form action="#" method="post">
            <label htmlFor="animal">좋아하는 동물</label><br />
            <select name="animal" id="animal" value={from.animal} size={4} multiple={true} onChange={handleFormList}>
                <option value="dog">개</option>
                <option value="cat">고양이</option>
                <option value="hamster">햄스터</option>
                <option value="rabbit">토끼</option>
            </select>
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
}