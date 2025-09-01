import { Suspense } from "react";
import { ThrowResult } from "./ThrowResult";

export function SuspenseResult() {
    return (
        <Suspense fallback = {<p>Now Loading...</p>}>
            <ThrowResult />
        </Suspense>
    );
}