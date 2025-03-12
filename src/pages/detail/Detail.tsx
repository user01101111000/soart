import { FC, JSX } from "react";
import DetailContainer from "../../containers/detail/DetailContainer.tsx";
import { Helmet } from "react-helmet";

const Detail: FC = (): JSX.Element => {
    return <>

        <Helmet>
            <title>soart | Detail</title>
            <link rel="canonical" href={window.location.href} />
            <meta name="description" content="Explore new artworks. This page is a detail page where you can find artwork's detail." />
        </Helmet>

        <DetailContainer />
    </>

}

export default Detail;