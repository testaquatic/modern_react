import { useQuery } from "@tanstack/react-query";
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

export default function QueryBasic() {
    const query = useQuery({queryKey: ["weather"], queryFn: fetchWeather});
    if (query.isLoading) {
        return <p>Loading</p>;
    }

    if (query.isError) {
        return <p>Error: {query.error.message}</p>;
    }

    return (
        <figure>
            <img src={`https://openweathermap.org/img/wn/${query.data?.weather?.[0]?.icon}.png`} alt={query.data?.weather?.[0]?.main} />
            <figcaption>{query.data?.weather?.[0]?.description}</figcaption>
        </figure>
    );
}