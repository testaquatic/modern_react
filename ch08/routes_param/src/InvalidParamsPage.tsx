import { useRouteError } from "react-router-dom";

export default function InvalidParamsPage() {
    const error = useRouteError();

    if (!(error instanceof RangeError)) {
        throw error;
    }

    return <p style={{ color: "red" }}>{error.message}</p>;
}
