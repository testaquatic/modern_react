import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryBasic from "./QueryBasic";
import QueryPre from "./QueryPre";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import QuerySuspense from "./QuerySuspense";

const cli = new QueryClient;

function App() {
  return (
  <>
  <QueryPre />
  <QueryClientProvider client={cli}>
  <QueryBasic />
  <Suspense fallback={<p>Loading...</p>}>
  <ErrorBoundary fallback={<div>오류가 발생했습니다.</div>}>
    <QuerySuspense />
  </ErrorBoundary>
  </Suspense>
  </QueryClientProvider>
  </>
  );
}

export default App
