import { FC, JSX } from "react";
import HomeContainer from "../../containers/home/HomeContainer.tsx";
import { Helmet } from "react-helmet";

const Home: FC = (): JSX.Element => {
    return <>

        <Helmet>
            <title>soart | Home</title>
            <link rel="canonical" href={window.location.href} />
            <meta name="description" content="It's a magnificent day to discover new arts. Explore new arts." />
        </Helmet>

        <HomeContainer />
    </>
}

export default Home;