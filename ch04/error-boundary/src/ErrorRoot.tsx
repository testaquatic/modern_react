import { ErrorBoundary } from "react-error-boundary";
import ErrorThrow from "./ErrorThrow";

export function ErrorRoot() {
    return (
        <>
        <h3>Error Boundary의 기본</h3>
        <ErrorBoundary fallback={<div>오류가 발생했다.</div>}>
            <ErrorThrow />
        </ErrorBoundary>
        </>
    );
}