import {FC, JSX} from "react";
import Logo from "../ui/Logo.tsx";
import {Location, NavLink, useLocation} from "react-router-dom";

const Footer: FC = (): JSX.Element => {

    const location: Location = useLocation();

    return <footer>

        <div className={"footer_content"}>
            <Logo/>

            <div className={"footer_menu"}>
                <NavLink to={"/"} onClick={(): void => {
                    if (location.pathname == "/") window.scrollTo(0, 0);
                }}>Home</NavLink>
                <NavLink to={"/explore"} onClick={(): void => {
                    if (location.pathname == "/explore") window.scrollTo(0, 0);
                }}>Explore</NavLink>
                <NavLink to={"/about"} onClick={(): void => {
                    if (location.pathname == "/about") window.scrollTo(0, 0);
                }}>About</NavLink>
            </div>


            <div className={"footer_social_links"}>

            <a href="https://github.com/user01101111000/soart" target="_blank" rel="noreferrer" title="Visit github repository">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>

            </a>

            <a href="https://www.linkedin.com/in/elnurguliyev/" target="_blank" rel="noreferrer" title="Visit linkedin profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>


            </div>
        </div>


        <div className={"copyright_content"}>
            <p>&copy; {new Date().getFullYear()} soart. All rights reserved</p>
        </div>

    </footer>
}

export default Footer;