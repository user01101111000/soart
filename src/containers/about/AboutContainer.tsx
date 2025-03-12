import AnimatedSection from "../../components/ui/AnimatedSection.tsx";
import { FC } from "react";
import Logo from "../../components/ui/Logo.tsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import about_data from "../../constants/about_data.ts";

const AboutContainer: FC = (): JSX.Element => {
    return <AnimatedSection class_name={"about_container"}>
        <div className={"about_content_text"}>
            <Logo />
            <p>{about_data.description}</p>
            <div className={"about_content_links"}>
                <a href="https://github.com/user01101111000/soart" target="_blank" rel="noreferrer" title="Visit github repository">
                    <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/elnurguliyev/" target="_blank" rel="noreferrer" title="Visit linkedin profile">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    </AnimatedSection>
}

export default AboutContainer;