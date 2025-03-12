import { FC, JSX } from "react";
import AboutContainer from "../../containers/about/AboutContainer.tsx";
import { Helmet } from "react-helmet";

const About: FC = (): JSX.Element => {
    return <>

        <Helmet>
            <title>soart | About</title>
            <link rel="canonical" href={window.location.href} />
            <meta name="description" content="Explore new artworks." />
        </Helmet>

        <AboutContainer />
    </>
};

export default About;