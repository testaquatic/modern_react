import { RouterProvider } from "react-router-dom";
import routeParam from "./routesParam";

function App() {
    return (
        <>
            <RouterProvider router={routeParam} />
        </>
    );
}

export default App;
