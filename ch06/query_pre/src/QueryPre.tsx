import { useEffect, useState } from "react";

const sleep = (delay: number) =>
    new Promise((resolve) => setTimeout(resolve, delay));

const fetchWeather = async () => {
    await sleep(2000);
    const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=Seoul&lang=kr&appid=01ff25235f79fc52b20549473e609cb0`,
    );

    if (res.ok) {
        return res.json();
    }

    throw new Error(res.statusText);
};

type weatherJSON = {
    coord: {
        lon: number;
        lat: number;
    };
    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        },
    ];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    rain: {
        "1h": number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
};

export function QueryPre() {
    const [data, setData] = useState<null | weatherJSON>(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(() => true);
        fetchWeather()
            .then((result: weatherJSON) => setData(result))
            .catch((err: Error) => setError(err.message))
            .finally(() => setLoading(() => false));
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <figure>
            <img
                src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
                alt={data?.weather?.[0]?.main}
            />
            <figcaption>{data?.weather?.[0]?.description}</figcaption>
        </figure>
    );
}
