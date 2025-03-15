import React from "react";
import { NavLink } from "react-router";

type NavLinksProps = {
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<NavLinksProps> = ({ setShowMenu, showMenu }: NavLinksProps): React.JSX.Element => {

    const handleClick: (path_name: string) => void = (path_name: string): void => {

        setShowMenu((p: boolean): boolean => !p);

        switch (true) {
            case "/" == path_name:
                window.scrollTo(0, 0);
                break;
            case "/explore" == path_name:
                window.scrollTo(0, 0);
                break;
            case "/about" == path_name:
                window.scrollTo(0, 0);
                break;
            default:
                break;
        }

    }

    return <nav className={showMenu ? "" : "show"}>
        <NavLink to={"/"} onClick={(): void => { handleClick("/") }}>Home</NavLink>
        <NavLink to={"/explore"} onClick={(): void => { handleClick("/explore") }}>Explore</NavLink>
        <NavLink to={"/about"} onClick={(): void => { handleClick("/about") }}>About</NavLink>

        <div className="close_menu" onClick={(): void => {
            setShowMenu((p: boolean): boolean => !p);
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
            </svg>
        </div>


    </nav>
};

export default NavLinks;