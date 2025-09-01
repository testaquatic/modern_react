let flag = false;

export function ThrowPromise() {
    if (flag) {
        return <p>올바르게 표시되었다.</p>
    }

    throw new Promise((resolve) => {
        setTimeout(() => {
            flag = true;
            resolve("Success!!");
        }, 3000);
    });
}