import {FC, JSX, useState} from "react";
import {NavLink} from "react-router-dom";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {IoIosMenu, IoIosCloseCircleOutline} from "react-icons/io";


const NavBar: FC = (): JSX.Element => {

    const [showMenu, setShowMenu] = useState<boolean>(true);


    return <header>
        <div className={"logo_title"}>
            <span>so</span>
            <span>art</span>
        </div>


        {showMenu &&
            <nav>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/explore"}>Explore</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>

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