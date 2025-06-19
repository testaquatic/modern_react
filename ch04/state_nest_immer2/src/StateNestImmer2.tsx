import React from "react";

export function StateNestImmer2() {
    const [form, setForm] = React.useState({
        name: "홍길동",
        address: {
            do: "충청북도",
            city: "청주시",
        }
    });

    const handleNest = (e: React.ChangeEvent<HTMLInputElement>) => {
        const ns = e.target.name.split(".");
        if (ns.length === 1 && ns[0] === "name") {
            setForm((form) => {
                form.name = e.target.value;
                return {...form, address:{...form.address}};
            })
        } else if (ns[0] === "address") {
            switch (ns[1]) {
                case "do":
                    setForm((form) => {
                        form.address.do = e.target.value;
                        return {...form, address:{...form.address}};
                    });
                    break
                case "city":
                    setForm((form) => {
                        form.address.city = e.target.value;
                        return {...form, address:{...form.address}};
                    });
                    break;
                default:
                    break;
            }
        }
    };

    const show = () => {
        console.log(form);
    }

    return (
        <form>
            <div>
                <label htmlFor="name">이름</label>
                <input type="text" id = "name" name="name" value={form.name} onChange={handleNest} />
            </div>
            <div>
                <label htmlFor="do">도</label>
                <input type="text" id="do" name="address.do" value={form.address.do} onChange={handleNest}/>
            </div>
            <div>
                <label htmlFor="city">시/군/구</label>
                <input type="text" id="city" name="address.city" value={form.address.city} onChange={handleNest}/>
            </div>
            <div>
                <button type = "button" onClick={show}>확인</button>
            </div>
        </form>
    )

}