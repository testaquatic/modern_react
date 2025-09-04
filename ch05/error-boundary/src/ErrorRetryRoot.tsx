import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import ErrorRetryThrow from "./ErrorRetryThrow";


export default function ErrorRetryRoot() {
    const handleFallback = ({error, resetErrorBoundary}:  FallbackProps)  => {
        const handleClick = () => resetErrorBoundary();
        return (
            <div>
                <h4>다음 오류가 발생했다.</h4>
                <p>{error.message}</p>
                <button type="button" onClick={handleClick}>Retry</button>
            </div>
        );
    };

    const handleReset = () => console.log("Retry!!");

    return (
        <>
        <h3>Error Boundary의 기본</h3>
        <ErrorBoundary onReset={handleReset} FallbackComponent={handleFallback}>
            <ErrorRetryThrow />
        </ErrorBoundary>
        </>
    );
}