import type { ReactElement } from "react";

let flag = false;

export function ThrowPromise(): ReactElement {
    if (flag) {
        return <p>올바르게 표시되었다.</p>;
    }

    throw new Promise((resolve) => {
        setTimeout(() => {
            flag = true;
            resolve("Success!!");
        }, 3000);
    });
}
