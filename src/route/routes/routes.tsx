import {RouteObject} from "react-router-dom";
import React, {FC, LazyExoticComponent, Suspense} from "react";
import LoadingContainer from "../../components/ui/LoadingContainer.tsx";


const Layout: LazyExoticComponent<FC> = React.lazy((): Promise<typeof  import("../../layout/Layout.tsx")> => import("../../layout/Layout.tsx"));
const Home: LazyExoticComponent<FC> = React.lazy((): Promise<typeof import("../../pages/home/Home.tsx")> => import("../../pages/home/Home.tsx"));
const Explore: LazyExoticComponent<FC> = React.lazy((): Promise<typeof import("../../pages/explore/Explore.tsx")> => import("../../pages/explore/Explore.tsx"));
const NotFound: LazyExoticComponent<FC> = React.lazy((): Promise<typeof import("../../pages/not_found/NotFound.tsx")> => import("../../pages/not_found/NotFound.tsx"));
const Detail: LazyExoticComponent<FC> = React.lazy((): Promise<typeof import("../../pages/detail/Detail.tsx")> => import("../../pages/detail/Detail.tsx"));
const About: LazyExoticComponent<FC> = React.lazy((): Promise<typeof import("../../pages/about/About.tsx")> => import("../../pages/about/About.tsx"));


const routes: RouteObject[] = [
    {
        path: "/",
        element: <Suspense fallback={<LoadingContainer/>}><Layout/></Suspense>,
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