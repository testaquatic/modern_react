import type { ChangeEvent, ReactElement } from "react";
import { useImmer } from "use-immer";

export function StateNestImmer2(): ReactElement {
    const [form, setForm] = useImmer({
        name: "홍길동",
        address: {
            do: "전라북도",
            city: "군산시",
        }
    });

    const handleNest = (e: ChangeEvent<HTMLInputElement>) => {
        const ns = e.target.name.split('.');
        setForm((form) => {
            if (ns.length === 1 && ns[0] === "name") {
                form[ns[0]] = e.target.value;
            } else if (ns.length > 1 && ns[0] === "address" && (ns[1] === "do" || ns[1] === "city")) {
                form[ns[0]][ns[1]] = e.target.value;
            }
        });
    }   

    const show = () => console.log(`이름: ${form.name}, 주소: ${form.address.do} ${form.address.city}`);

    return (
        <form action="#" method="post">
            <div>
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleNest} />
            </div>
            <div>
                <label htmlFor="do">주소(도)</label>
                <input type="text" name="address.do" id="do" value={form.address.do} onChange={handleNest} />
            </div>
            <div>
                <label htmlFor="city">주소(시/군/구)</label>
                <input type="text" name="address.city" id="city" value={form.address.city} onChange={handleNest} />
            </div>
            <div>
                <button type="button" onClick={show}>보내기</button>
            </div>
        </form>
    );
}