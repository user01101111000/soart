import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/layout/NavBar/NavBar.tsx";
import Footer from "../components/layout/Footer.tsx";
import LoadingContainer from "../components/ui/LoadingContainer.tsx";

const Layout: React.FC = (): React.JSX.Element => {

    return <main className={"layout"}>
        <NavBar />

        <React.Suspense fallback={<LoadingContainer />}>
            <Outlet />
        </React.Suspense>
        
        <Footer />
    </main>
}

export default Layout;