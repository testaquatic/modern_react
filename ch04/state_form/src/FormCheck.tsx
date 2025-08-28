import { useState, type ChangeEvent } from "react";

export function FormCheck() {
    const [form, setForm] = useState({
        agreement: false,
    });

    const handleFormCheck = (e: ChangeEvent<HTMLInputElement>) => setForm({
        ...form,
        [e.target.name]: e.target.checked,
    });

    const show = () => console.log(`동의 확인: ${form.agreement ? "동의" : "미동의"}`);

    return (
        <form action="#">
            <div>
                <label htmlFor="agreement">동의합니다.</label>
                <input type="checkbox" id="agreement" name="agreement" checked={form.agreement} onChange={handleFormCheck} />
            </div>
            <button type="button" onClick={show}>보내기</button>
        </form>
    )
}