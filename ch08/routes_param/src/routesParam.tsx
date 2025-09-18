import {
    createBrowserRouter,
    createRoutesFromElements,
    redirect,
    Route,
} from "react-router-dom";
import RouterParam from "./RouterParam";
import BookPage from "./BookPage";
import TopPage from "./TopPage";
import SearchPage from "./SearchPage";
import NotFoundPage from "./NotFoundPage";
import BookQueryPage from "./BookQueryPage";
import BookStatePage from "./BookStatePage";
import apiKey from "./apiKey";
import CommonErrorPage from "./CommonErrorPage";
import BookFormPage from "./BookFormPage";
import * as yup from "yup";
import { date, number, string } from "yup";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchWeather = async ({ params }: { params: { city: string } } & any) => {
    await sleep(2000);

    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=${apiKey}`,
    );

    if (res.ok) {
        return res;
    }

    switch (res.status) {
        case 404:
            throw new Response(
                JSON.stringify({ message: "city is invalid." }),
                { status: res.status },
            );
        case 401:
            throw new Response(
                JSON.stringify({ message: "api key is invalid." }),
                { status: res.status },
            );
        default:
            throw new Response(
                JSON.stringify({ message: "api server is in trouble." }),
                { status: 501 },
            );
    }
};

const bookAction = async ({ request }: { request: Request }) => {
    const form = await request.formData();

    const bookScheme = yup.object({
        title: string().label("도서명").required().max(10),
        price: number().label("가격").integer().positive(),
        published: date().label("출간일").required().max(new Date(2100, 0, 1)),
    });

    let info;

    try {
        info = await bookScheme.validate(
            {
                title: form.get("title"),
                price: form.get("price") || 0,
                published: new Date(
                    form.get("published")?.toString() || Date.now(),
                ),
            },
            {
                abortEarly: false,
            },
        );

        console.log(info);

        return redirect("/");
    } catch (e) {
        if (e instanceof yup.ValidationError) {
            return e.errors;
        }

        return e;
    }
};

const routesParams = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParam />} errorElement={<CommonErrorPage />}>
            <Route path="/" element={<TopPage />} />
            <Route
                path="/books"
                lazy={async () => {
                    const { BookListPage } = await import("./BookNest");
                    return { Component: BookListPage };
                }}
            >
                <Route
                    path=":isbn"
                    lazy={async () => {
                        const { BookDetailPage } = await import("./BookNest");
                        return { Component: BookDetailPage };
                    }}
                />
            </Route>

            <Route
                path="/book/form"
                element={<BookFormPage />}
                action={bookAction}
            />
            <Route path="/book/:isbn?" element={<BookPage />} />
            <Route path="/search/*" element={<SearchPage />} />
            <Route path="/bookQuery" element={<BookQueryPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/bookState" element={<BookStatePage />} />
            <Route
                path="/weather/:city"
                lazy={() => import("./WeatherLazyPage")}
            />
        </Route>,
    ),
);

export default routesParams;
