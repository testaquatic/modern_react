function sleep(delay: number) {
    let start = Date.now();
    while (Date.now() - start < delay) {/*VOID*/}
}

export function HeavyUI({ delay }: { delay: number }) {
    sleep(delay);
    return <p>지연 시간은 {delay}밀리초</p>;
}

