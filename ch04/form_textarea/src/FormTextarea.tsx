import { useState, type FormEvent, type ReactElement } from "react";

export function FormTextarea(): ReactElement {
    const [form, setForm] = useState({ comment: "다양한 폼 요소를..." });

    const handleForm = (e: FormEvent) => {
        setForm((form): typeof form => {
            if (e.target instanceof HTMLTextAreaElement && e.target.name in form) {
                return {
                    ...form,
                    [e.target.name]: e.target.value,
                };
            } else {
                return form;
            }
        })
    };

    const show = (): void => console.log(`댓글: ${form.comment}`);

    return (
        <form action="#" method="post">
            <label htmlFor="comment">댓글</label><br />
            <textarea name="comment" id="comment" cols={30} rows={7} value={form.comment} onChange={handleForm}></textarea><br />
            <button type="button" onClick={show}>보내기</button>
        </form>
    );

}