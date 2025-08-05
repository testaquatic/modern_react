import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { ErrorEvent } from "./ErrorEvent";

export function ErrorEventRoot() {
    const handleReset = () => console.log("Retry!!!");
    const handleFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
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
    return (
        <>
            <h3>Error Boundary의 기본</h3>
            <ErrorBoundary
                onReset={handleReset}
                fallbackRender={handleFallback}
            >
                <ErrorEvent />
            </ErrorBoundary>
        </>
    );
}
