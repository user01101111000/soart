import {FC, JSX, Suspense, useEffect} from "react";
import {Location, Outlet} from "react-router-dom";
import NavBar from "../components/layout/NavBar/NavBar.tsx";
import Footer from "../components/layout/Footer.tsx";
import LoadingContainer from "../components/ui/LoadingContainer.tsx";
import {useLocation} from "react-router-dom";

const Layout: FC = (): JSX.Element => {
    const location: Location = useLocation();

    useEffect((): void => {
        window.scrollTo(0, 0);
    }, [location.pathname])


    return <main className={"layout"}>
        <NavBar/>
        <Suspense fallback={<LoadingContainer/>}>
            <Outlet/>
        </Suspense>
        <Footer/>
    </main>
}

export default Layout;