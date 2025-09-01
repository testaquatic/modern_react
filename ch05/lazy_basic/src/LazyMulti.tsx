import { lazy, Suspense } from 'react';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));
const LazyButton2 = lazy(() => sleep(1000).then(() => import('./LazyButton')));

export function LazyMulti() {
    return (
        <Suspense fallback={<p>Now Loading...</p>}>
            <LazyButton />
            <LazyButton2 />
        </Suspense>
    )
}