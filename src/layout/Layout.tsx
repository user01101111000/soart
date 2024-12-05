import {FC, JSX, Suspense} from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import LoadingContainer from "../components/ui/LoadingContainer.tsx";

const Layout: FC = (): JSX.Element => {
    return <main className={"layout"}>
        <NavBar/>
        <Suspense fallback={<LoadingContainer/>}>
            <Outlet/>
        </Suspense>
        <Footer/>
    </main>
}

export default Layout;