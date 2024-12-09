import {FC, JSX} from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import Logo from "../../../components/ui/Logo.tsx";
import {Location, NavLink, useLocation} from "react-router-dom";

const Footer: FC = (): JSX.Element => {

    const location: Location = useLocation();

    return <footer>

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


            <a href="https://github.com/user01101111000/soart" target="_blank" rel="noreferrer">
                <FaGithub/>
            </a>

            <a href="https://www.linkedin.com/in/elnurguliyev/" target="_blank" rel="noreferrer">
                <FaLinkedin/>
            </a>


        </div>

    </footer>
}

export default Footer;