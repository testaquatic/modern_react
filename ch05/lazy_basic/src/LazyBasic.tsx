import { lazy, Suspense } from "react";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const LazyButton = lazy(() => sleep(20000).then(() => import('./LazyButton')));

export function LazyBasic() {
    return (
        <Suspense fallback = {<p>Now Loading...</p>}>
            <LazyButton />
        </Suspense>
    );
}