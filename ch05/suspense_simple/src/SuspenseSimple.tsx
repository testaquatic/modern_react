import { Suspense, type ReactElement } from "react";
import { ThrowPromise } from "./ThrowPromise";

export function SuspenseSimple(): ReactElement {
    return (
        <Suspense fallback={<p>Now Loading...</p>}>
            <ThrowPromise />
        </Suspense>
    );
}
