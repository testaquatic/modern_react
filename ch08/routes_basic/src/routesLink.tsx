import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RouterApp from "./RouterApp";
import { ArticlePage } from "./ArticlePage";
import TopPage from "./TopPage";
import AboutPage from "./AboutPage";
import InfoPage from "./InfoPage";

const routesLink = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<RouterApp />}>
            <Route path="/" element={<TopPage />} />
            <Route path="/article" element={<ArticlePage />}/>
            <Route path="/article/info" element={<InfoPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Route>
        </>
    )
);

export default routesLink;