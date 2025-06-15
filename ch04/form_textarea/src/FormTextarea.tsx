import { useState } from "react";

export default function FormTestarea() {
    const [form, setForm] = useState({ comment: "다양한 폼 요소를... " });

    const handleForm = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const show = () => {
        console.log(`댓글: ${form.comment}}`);
    };

    return (
        <form>
            <label htmlFor="comment">댓글</label><br />
            <textarea name="comment" id="comment" cols={30} rows={7} value={form.comment} onChange={handleForm}></textarea><br />
            <button type="button" onClick={show}>보내기</button>
        </form>
    )
}