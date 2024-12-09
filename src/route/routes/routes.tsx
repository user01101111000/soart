import {RouteObject} from "react-router-dom";
import Layout from "../../layout/Layout.tsx";
import Home from "../../pages/home/Home.tsx";
import Explore from "../../pages/explore/Explore.tsx";
import NotFound from "../../pages/not_found/NotFound.tsx";
import Detail from "../../pages/detail/Detail.tsx";
import About from "../../pages/about/About.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "explore",
                element: <Explore/>
            },
            {
                path: "explore/:id",
                element: <Detail/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "*",
                element: <NotFound/>
            }

        ]
    }
];

export default routes;