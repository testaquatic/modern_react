import { lazy, Suspense, type ReactElement } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const LazyButton = lazy(() => sleep(3000).then(() => import("./LazyButton")));

export function LazyBasic(): ReactElement {
    return (
        <Suspense fallback={<p>Now Loading...</p>}>
            <LazyButton />
        </Suspense>
    );
}
