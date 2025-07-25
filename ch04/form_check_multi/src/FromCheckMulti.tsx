import { useState, type ChangeEvent, type ReactElement } from "react";

export function FormCheckMulti(): ReactElement {
    const [form, setForm] = useState({ animal: new Set(["dog", "hamster"]) });

    const handleFormMulti = (e: ChangeEvent<HTMLInputElement>) => {
        const fa = form.animal;

        if (e.target.checked) {
            fa.add(e.target.value);
        } else {
            fa.delete(e.target.value);
        }

        setForm((form) => ({ ...form, [e.target.name]: fa }));
    };
        
    const show = () => console.log(`좋아하는 동물:${Array.of(...form.animal)}`);

    return (
        <form action="#" method="post">
            <fieldset>
                <legend>좋아하는 동물</legend>
                <label htmlFor="animal_dog">개</label>
                <input type="checkbox" id="animal_dog" name="animal" value="dog" checked={form.animal.has("dog")} onChange={handleFormMulti} /><br />
                <label htmlFor="animal_cat">고양이</label>
                <input type="checkbox" id="animal_cat" name="animal" value="cat" checked={form.animal.has("cat")} onChange={handleFormMulti} /><br />
                <label htmlFor="animal_hamster">햄스터</label>
                <input type="checkbox" id="animal_hamster" name="animal" value="hamster" checked={form.animal.has("hamster")} onChange={handleFormMulti} /><br />
            </fieldset>
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
    
}