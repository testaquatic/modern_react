import { lazy, Suspense, type ReactElement } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const LazyButton = lazy(() => sleep(5000).then(() => import("./LazyButton")));
const LazyButton2 = lazy(() => sleep(6000).then(() => import("./LazyButton2")));

export function LazyMulti(): ReactElement {
    return (
        <Suspense fallback={<p>Now Loading...</p>}>
            <LazyButton />
            <LazyButton2 />
        </Suspense>
    );
}
