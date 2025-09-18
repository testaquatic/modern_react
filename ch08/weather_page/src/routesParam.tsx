import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import apiKey from "./apiKey";
import WeatherPage from "./WeatherPage";
import RouterParam from "./RouterParam";

const routeParam = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RouterParam />}>
            <Route
                path="/weather/:city"
                element={<WeatherPage />}
                loader={({ params }) =>
                    fetch(
                        `https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=${apiKey}`,
                    )
                }
            />
        </Route>,
    ),
);

export default routeParam;
