import { Suspense } from "react";
import { ThrowPromise } from "./ThrowPromise";

export function SuspenseSimple() {
    return (
        <Suspense fallback = {<p>Now Loading...</p>}>
            <ThrowPromise />
        </Suspense>
    )
}