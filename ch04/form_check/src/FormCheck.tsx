import { useState } from "react";

export default function FormCheck() {
    const [form, setForm] = useState({
        agreement: true,
    });

    const handleFormCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked,
        });
    };

    const show = (): void => {
        console.log(`동의 확인: ${form.agreement ? "동의" : "미동의"}`);
    };

    return (
        <form>
            <label htmlFor="agreement">동의합니다.</label>
            <input type="checkbox" name="agreement" id="agreement" checked={form.agreement} onChange={handleFormCheck} /><br />
            <button type="button" onClick={show}>확인</button>
        </form>
    );
}