import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QuerySuspense } from "./QuerySuspense";

const cli = new QueryClient();

function App() {
    return (
        <Suspense fallback={<p>loading...</p>}>
            <ErrorBoundary fallback={<div>오류가 발생했습니다.</div>}>
                <QueryClientProvider client={cli}>
                    <QuerySuspense />
                </QueryClientProvider>
            </ErrorBoundary>
        </Suspense>
    );
}

export default App;
