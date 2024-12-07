import {FC, JSX, useState} from "react";
import {Location, NavLink} from "react-router-dom";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {IoIosMenu, IoIosCloseCircleOutline} from "react-icons/io";
import Logo from "../../../components/ui/Logo.tsx";
import {useLocation} from "react-router-dom";


const NavBar: FC = (): JSX.Element => {
    const location: Location = useLocation();
    const [showMenu, setShowMenu] = useState<boolean>(true);


    return <header>
        <Logo/>

        {showMenu &&
            <nav>
                <NavLink to={"/"} onClick={(): void => {
                    if (location.pathname == "/") window.scrollTo(0, 0);
                }}>Home</NavLink>
                <NavLink to={"/explore"} onClick={(): void => {
                    if (location.pathname == "/explore") window.scrollTo(0, 0);
                }}>Explore</NavLink>
                <NavLink to={"/about"} onClick={(): void => {
                    if (location.pathname == "/about") window.scrollTo(0, 0);
                }}>About</NavLink>
                <NavLink to={"/contact"} onClick={(): void => {
                    if (location.pathname == "/contact") window.scrollTo(0, 0);
                }}>Contact</NavLink>

                <IoIosCloseCircleOutline className={"close_menu"} onClick={(): void => setShowMenu(false)}/>

            </nav>}


        <div className={"nav_buttons"}>
            <a href="https://github.com/user01101111000/soart" target="_blank" rel="noreferrer">
                <FaGithub/>
            </a>

            <a href="https://www.linkedin.com/in/elnurguliyev/" target="_blank" rel="noreferrer">
                <FaLinkedin/>
            </a>

            <IoIosMenu className={"hamburger_menu"} onClick={(): void => setShowMenu(true)}/>

        </div>
    </header>
}
export default NavBar;