import {RouteObject} from "react-router-dom";
import Layout from "../../layout/Layout.tsx";
import Home from "../../pages/home/Home.tsx";


// const Layout: LazyExoticComponent<FC> = React.lazy((): Promise<{ default: FC }> => import("../../layout/Layout.tsx"));
// const Home: LazyExoticComponent<FC> = React.lazy((): Promise<{ default: FC }> => import("../../pages/home/Home.tsx"));


const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            }

        ]
    }
];

export default routes;