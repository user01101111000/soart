import {FC, JSX, MutableRefObject, useRef, useState} from "react";
import {Location, NavLink} from "react-router-dom";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {IoIosMenu, IoIosCloseCircleOutline} from "react-icons/io";
import Logo from "../../../components/ui/Logo.tsx";
import {useLocation} from "react-router-dom";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";


gsap.registerPlugin(useGSAP)

const NavBar: FC = (): JSX.Element => {
    const nav_ref: MutableRefObject<HTMLElement | null> = useRef(null);
    const location: Location = useLocation();
    const [showMenu, setShowMenu] = useState<boolean>(false);


    const toggleMenu = () => {
        if (showMenu) {
            gsap.to(nav_ref.current, {
                duration: 0.5,
                x: "-100%",
                ease: "power3.inOut",
            });
        } else {
            gsap.to(nav_ref.current, {
                duration: 0.5,
                x: "0%",
                ease: "power3.inOut",
            });
        }
        setShowMenu(!showMenu);
    };

    return <header>
        <Logo/>


        <nav ref={nav_ref}>
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

            <IoIosCloseCircleOutline className={"close_menu"} onClick={toggleMenu}/>

        </nav>


        <div className={"nav_buttons"}>
            <a href="https://github.com/user01101111000/soart" target="_blank" rel="noreferrer">
                <FaGithub/>
            </a>

            <a href="https://www.linkedin.com/in/elnurguliyev/" target="_blank" rel="noreferrer">
                <FaLinkedin/>
            </a>

            <IoIosMenu className={"hamburger_menu"} onClick={toggleMenu}/>

        </div>
    </header>
}
export default NavBar;