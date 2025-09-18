import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RouterCustom from "./RouterCustom";

const routesMyLink = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterCustom />}>
            <Route path="/" element={<TopPage />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Route>
    );
);

export default routesMyLink;