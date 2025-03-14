import {FC, JSX, useState} from "react";
import {Location, NavLink, useLocation} from "react-router";
import Logo from "../../ui/Logo.tsx";

import SearchBar from "./SearchBar.tsx";
import {motion, AnimatePresence} from "motion/react";


const NavBar: FC = (): JSX.Element => {
    const location: Location = useLocation();
    const [showMenu, setShowMenu] = useState<boolean>(true);
    const [showSearch, setShowSearch] = useState<boolean>(false);


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

            <div className="close_menu" onClick={(): void => {
                setShowMenu((p: boolean): boolean => !p);
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                </svg>
            </div>


        </nav>


        <div className={"nav_buttons"}>


            <AnimatePresence>
                {showSearch ? <SearchBar setShowSearch={setShowSearch}/> :
                    <motion.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.9}}>
                        <div className="search_icon" onClick={(): void => {
                            setShowSearch(true);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"
                                 strokeLinecap="round">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="m21 21-4.3-4.3"/>
                            </svg>
                        </div>

                    </motion.div>}
            </AnimatePresence>

            <a href="https://github.com/user01101111000/soart" target="_blank" rel="noreferrer"
               title="Visit github repository">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>

            </a>

            <a href="https://www.linkedin.com/in/elnurguliyev/" target="_blank" rel="noreferrer"
               title="Visit linkedin profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                </svg>
            </a>

            <div className="hamburger_menu" onClick={(): void => {
                setShowMenu((p: boolean): boolean => !p);
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" x2="20" y1="12" y2="12"/>
                    <line x1="4" x2="20" y1="6" y2="6"/>
                    <line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
            </div>


        </div>
    </header>
}
export default NavBar;