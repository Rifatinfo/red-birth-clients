import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Roots/Root";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
        ],
    },
]);

export default router;