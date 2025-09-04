import { useEffect, useState } from "react";
import { openWeatherApiKey } from "./apiKey";

const sleep = (delay: number) => new Promise(res => setTimeout(res, delay));

const fetchWeather = async () => {
    await sleep(2000);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&lang=kr&appid=${openWeatherApiKey}`);
    if (res.ok) {
        return res.json();
    }
    throw new Error(res.statusText);
}


type WeatherData = {
    weather?: {
        icon: string;
        description: string;
        main: string;
    }[];
}

export default function QueryPre() {
    const [data, setData] = useState<WeatherData | null>(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        fetchWeather().then(setData).catch(err => setError(err.message)).finally(() => setLoading(false));
    }, []);

    if (isLoading) {
        return <p>Loading</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <figure>
            <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`} alt={data?.weather?.[0]?.main} />
            <figcaption>{data?.weather?.[0]?.description}</figcaption>
        </figure>
    );
}