import { FC, JSX } from "react";
import HomeContainer from "../../containers/home/HomeContainer.tsx";
import { Helmet } from "react-helmet";

const Home: FC = (): JSX.Element => {
    return <>

        <Helmet>
            <title>soart | Home</title>
            <link rel="canonical" href={window.location.href} />
            <meta name="description" content="Explore new artworks." />
        </Helmet>

        <HomeContainer />
    </>
}

export default Home;