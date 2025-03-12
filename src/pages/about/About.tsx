import { FC, JSX } from "react";
import AboutContainer from "../../containers/about/AboutContainer.tsx";
import { Helmet } from "react-helmet";

const About: FC = (): JSX.Element => {
    return <>

        <Helmet>
            <title>soart | About</title>
            <link rel="canonical" href={window.location.href} />
            <meta name="description" content="soart About page. This page is about soart. You can learn what soart is from here." />
        </Helmet>

        <AboutContainer />
    </>
};

export default About;