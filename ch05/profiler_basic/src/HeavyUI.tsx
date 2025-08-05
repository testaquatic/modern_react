import type { ReactElement } from "react";

const sleep = (delay: number) => {
    const start = Date.now();
    while (Date.now() - start < delay) {
        /* do nothing */
    }
};

export function HeavyUI({ delay }: { delay: number }): ReactElement {
    sleep(delay);
    return <p>지연 시간은 {delay}밀리초</p>;
}
