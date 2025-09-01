import { wrapPromise } from "./wrapPromise";

const info = getInfo();

export function ThrowResult() {
    const result = info.get();
    return <p>{result}</p>;
}

function getInfo() {
    return wrapPromise(new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Succeeded!!");
            } else {
                reject("Error!");
            }
        }, 2000);
    }))
}