import {FC, JSX} from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import Logo from "../../../components/ui/Logo.tsx";

const Footer: FC = (): JSX.Element => {
    return <footer>

        <Logo/>

        <div className={"footer_menu"}>
            <a target={"_blank"} href={""}>Art</a>
            <a target={"_blank"} href={""}>Artists</a>
            <a target={"_blank"} href={""}>Source</a>
            <a target={"_blank"} href={""}>Contact</a>
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