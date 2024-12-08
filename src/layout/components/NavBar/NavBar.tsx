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


        <nav className={showMenu ? "" : "show"}>
            <NavLink to={"/"} onClick={(): void => {
                if (location.pathname == "/") window.scrollTo(0, 0);
                setShowMenu((p: boolean): boolean => !p);
            }}>Home</NavLink>
            <NavLink to={"/explore"} onClick={(): void => {
                if (location.pathname == "/explore") window.scrollTo(0, 0);
                setShowMenu((p: boolean): boolean => !p);
            }}>Explore</NavLink>
            <NavLink to={"/about"} onClick={(): void => {
                if (location.pathname == "/about") window.scrollTo(0, 0);
                setShowMenu((p: boolean): boolean => !p);
            }}>About</NavLink>

            <IoIosCloseCircleOutline className={"close_menu"} onClick={(): void => {
                setShowMenu((p: boolean): boolean => !p);
            }}/>

        </nav>


        <div className={"nav_buttons"}>
            <a href="https://github.com/user01101111000/soart" target="_blank" rel="noreferrer">
                <FaGithub/>
            </a>

            <a href="https://www.linkedin.com/in/elnurguliyev/" target="_blank" rel="noreferrer">
                <FaLinkedin/>
            </a>

            <IoIosMenu className={"hamburger_menu"} onClick={(): void => {
                setShowMenu((p: boolean): boolean => !p);
            }}/>

        </div>
    </header>
}
export default NavBar;