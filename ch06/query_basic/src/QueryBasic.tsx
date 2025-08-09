import { useQuery } from "@tanstack/react-query";

const sleep = (delay: number) =>
    new Promise((resolve) => setTimeout(resolve, delay));

const fetchWeahter = async (): Promise<{
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

export default function QueryBasic() {
    const { isLoading, data, isError, error } = useQuery({
        queryKey: ["weather"],
        queryFn: fetchWeahter,
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error: {error.message}</p>;
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
