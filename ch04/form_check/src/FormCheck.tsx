import { useState, type ChangeEvent, type ReactElement } from "react";

export function FormCheck(): ReactElement {
    const [form, setForm] = useState({ agreement: true });

    const handleFormCheck = (e: ChangeEvent<HTMLInputElement>) => {
        setForm((form) => ({ ...form, [e.target.name]: e.target.checked }));
    };

    const show = () => console.log(`동의 확인: ${form.agreement ? "동의" : "동의하지 않음"}`);

    return (
        <form>
            <label htmlFor="agreement">동의합니다:</label>
            <input type="checkbox" id="agreement" name="agreement" checked={form.agreement} onChange={handleFormCheck} /><br />
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
}