import type { ReactElement } from "react";

export function ErrorRetryThrow(): ReactElement {
    if (Math.random() < 0.6) {
        throw new Error("Error is occured in MyApp.");
    }

    return <p>잘 실행되었다.</p>;
}
