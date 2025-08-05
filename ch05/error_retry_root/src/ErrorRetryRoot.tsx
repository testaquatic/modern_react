import type { ReactElement, ReactNode } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { ErrorRetryThrow } from "./ErrorRetryThrow";

export function ErrorRetryRoot(): ReactElement {
    const handleFallback = ({
        error,
        resetErrorBoundary,
    }: FallbackProps): ReactNode => {
        const handleClick = () => resetErrorBoundary();

        return (
            <div>
                <h4>다음 오류가 발생했다.</h4>
                <p>{error.message ?? "Unknown Error"}</p>
                <button type="button" onClick={handleClick}>
                    Retry
                </button>
            </div>
        );
    };

    const handleReset = () => console.log("Retry!!!");
    return (
        <>
            <h3>Error Boundary</h3>
            <ErrorBoundary
                onReset={handleReset}
                FallbackComponent={handleFallback}
            >
                <ErrorRetryThrow />
            </ErrorBoundary>
        </>
    );
}
