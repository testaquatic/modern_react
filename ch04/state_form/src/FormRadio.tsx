import { useState, type ChangeEvent } from "react";

export function FormRadio() {
    const [form, setForm] = useState({
        os: "windows",
    });

    const handleForm = (e: ChangeEvent<HTMLInputElement>) => setForm({
        ...form,
        [e.target.name]: e.target.value,
    });

    const show = () => console.log(`사용OS: ${form.os}`);

    return (
        <form action="#">
            <fieldset>
                <legend>사용 OS:</legend>
                <div>
                    <label htmlFor="os_win">Windows</label>
                    <input type="radio" name="os" id="os_win" value="windows" checked={form.os === "windows"} onChange={handleForm} />
                </div>
                <div>
                    <label htmlFor="os_mac">Mac</label>
                    <input type="radio" name="os" id="os_mac" value="mac" checked={form.os === "mac"} onChange={handleForm} />
                </div>
                <div>
                    <label htmlFor="os_lin">Linux</label>
                    <input type="radio" name="os" id="os_lin" value="linux" checked={form.os === "linux"} onChange={handleForm} />
                </div>
                <div>
                    <button type="button" onClick={show}>보내기</button>
                </div>   
            </fieldset>
        </form>
    )

}