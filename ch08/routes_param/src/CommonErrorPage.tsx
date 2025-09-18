import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function CommonErrorPage() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404:
                return <p>원하는 페이지를 찾을 수 없습니다.</p>;
            case 401:
                return <p>인증에 실패했습니다.</p>;
            case 501:
                return <p>서비스가 일시적으로 중단되었습니다.</p>;
            default:
                return <p>알 수 없는 오류: {error.data.message}</p>;
        }
    }

    if (!(error instanceof Error)) {
        throw error;
    }

    return (
        <div>
            <h3>문제가 발생했습니다.</h3>
            <p>상세한 문제: {error.message}</p>
        </div>
    );
}
