import { useState, type ChangeEvent } from "react";

export function FormTextArea() {
    const [form, setForm] = useState({
        comment: `다양한 폼 요소를...`,
    });

    const handleForm = (e: ChangeEvent<HTMLTextAreaElement>) => setForm({
        ...form,
        [e.target.name]: e.target.value,
    });

    const show = () => console.log(`댓글: ${form.comment}`);

    return (
        <form>
            <label htmlFor="comment">댓글: </label>
            <textarea id="comment" name="comment" value={form.comment} onChange={handleForm} cols={30} rows={7} /><br />
            <button type="button" onClick={show}>보내기</button>
        </form>
    )

}