import { FC, JSX } from "react";
import ExploreContainer from "../../containers/explore/ExploreContainer.tsx";
import { Helmet } from "react-helmet";

const Explore: FC = (): JSX.Element => {
    return <>

        <Helmet>
            <title>soart | Explore</title>
            <link rel="canonical" href={window.location.href} />
            <meta name="description" content="Explore new artworks." />
        </Helmet>

        <ExploreContainer />
    </>
}

export default Explore;