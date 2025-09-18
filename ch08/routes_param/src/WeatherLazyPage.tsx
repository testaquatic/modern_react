import { useLoaderData, useRouteError } from "react-router-dom";
import apiKey from "./apiKey";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function loader({ params }: { params: { city: string } } & any) {
    await sleep(2000);
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params.city}&lang=kr&appid=${apiKey}`,
    );

    if (res.ok) {
        return res;
    }

    throw new Error(res.statusText);
}

export function Component() {
    const data = useLoaderData();
    return (
        <figure>
            <img
                src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
                alt={`${data?.weather?.[0]?.main}`}
            />
            <figcaption>{data?.weather?.[0]?.description}</figcaption>
        </figure>
    );
}
Component.displayName = "WeatherLazyPage";

export function ErrorBoundary() {
    const error = useRouteError();

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

ErrorBoundary.displayName = "WeatherLazyErrorPage";
