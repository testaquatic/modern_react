import { useState, type ChangeEvent } from "react";

export default function FormRadio() {
    const [form, setForm] = useState({
        os: "windows",
    });

    const handleForm = (e: ChangeEvent<HTMLInputElement>):void => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const show = (): void => {
        console.log(`사용OS:${form.os}`);
    }; 

    return (
        <form>
            <fieldset>
                <legend>OS:</legend>
                <label htmlFor="os_win">Windows</label>
                <input type="radio" id="os_win" name="os" value="windows" checked={form.os === "windows"} onChange={handleForm} /><br />
                <label htmlFor="os_mac">macOS</label>
                <input type="radio" id="os_mac" name="os" value="mac" checked={form.os === "mac"} onChange={handleForm} /><br />
                <label htmlFor="os_lin">Linux</label>
                <input type="radio" id="os_lin" name="os" value="linux" checked={form.os === "linux"} onChange={handleForm} /><br />
            </fieldset>
            <button onClick={show}>보내기</button>
        </form>
    );
}