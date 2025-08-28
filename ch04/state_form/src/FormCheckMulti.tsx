import { useState, type ChangeEvent } from "react";

export function FormCheckMulti() {
    const [form, setForm] = useState({animal: ["dog", "hamster"]});

    const handleFormMulti = (e: ChangeEvent<HTMLInputElement>) => {
        const fa = form.animal;
        if (e.target.checked) {
            fa.push(e.target.value);
        } else {
            fa.splice(fa.indexOf(e.target.value), 1);
        }

        setForm({
            ...form,
            [e.target.name]: fa,
        });
    };

    const show = () => console.log(`좋아하는 동물: ${form.animal}`);

    return (
        <form action="#">
            <fieldset>
                <legend>좋아하는 동물</legend>
                <div>
                    <label htmlFor="animal_dog">개</label>
                    <input type="checkbox" id="animal_dog" name="animal" value="dog" checked={form.animal.includes("dog")} onChange={handleFormMulti} />
                </div>
                <div>
                    <label htmlFor="animal_cat">고양이</label>
                    <input type="checkbox" id="animal_cat" name="animal" value="cat" checked={form.animal.includes("cat")} onChange={handleFormMulti} />
                </div>
                <div>
                    <label htmlFor="animal_hamster">햄스터</label>
                    <input type="checkbox" id="animal_hamster" name="animal" value="hamster" checked={form.animal.includes("hamster")} onChange={handleFormMulti} />
                </div>
                <div>
                    <label htmlFor="animal_rabbit">토끼</label>
                    <input type="checkbox" id="animal_rabbit" name="animal" value="rabbit" checked={form.animal.includes("rabbit")} onChange={handleFormMulti} />
                </div>
                <button type="button" onClick={show}>보내기</button>
            </fieldset>
        </form>
    )
}