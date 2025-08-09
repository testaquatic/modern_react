import { useSuspenseQuery } from "@tanstack/react-query";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchWeather = async (): Promise<{
    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        },
    ];
}> => {
    await sleep(2000);

    const res = await fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=Seoul&lang=kr&appid=01ff25235f79fc52b20549473e609cb0",
    );
    if (res.ok) {
        return res.json();
    }

    throw new Error(res.statusText);
};

export function QuerySuspense() {
    const { data } = useSuspenseQuery({
        queryKey: ["weather"],
        queryFn: fetchWeather,
    });

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
