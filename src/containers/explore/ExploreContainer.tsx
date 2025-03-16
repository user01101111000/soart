import React, { FC, JSX } from "react";
import useGetInfiniteArtworks from "../../hooks/service/useGetInfiniteArtworks.tsx";
import { Datum, ResponseArtworks } from "../../types/data/data_types.ts";
import AnimatedSection from "../../components/ui/AnimatedSection.tsx";
import ArtCard from "../../components/explore/ArtCard.tsx";

const ExploreContainer: FC = (): JSX.Element => {

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useGetInfiniteArtworks();


    const artworks: Datum[] | undefined = data?.pages.map((x: ResponseArtworks): Datum[] => x.data).flat();

    const artwork_components: JSX.Element[] | undefined = artworks?.map((artwork: Datum): JSX.Element => {
        return <ArtCard key={artwork.id} artwork={artwork} />
    });

    return <AnimatedSection class_name={"explore_container"}>

        <div className={"explore_container_header"}>
            <h1>Explore new artworks.</h1>
            <p>While exploring new artworks, be careful not to get lost in this sea and don't forget to add your own
                experiences.</p>
        </div>

        {status == "pending" ?
            <div className="arts_container">

                {Array.from({ length: 12 }).map((_: unknown, index: number): React.JSX.Element => {
                    return <div className="artwork_box" key={index}>
                        <div className="skeleton"></div>

                        <p style={{ width: "100%", height: "20px" }} className="skeleton"></p>
                        <p style={{ width: "100%", height: "20px" }} className="skeleton"></p>
                    </div>
                })}


            </div> : status == "error" ? <h1>Error</h1> :
                <div className={"arts_container"}>{artwork_components}</div>}


        {
            status !== "pending" && status !== "error" &&
            <button disabled={!hasNextPage || isFetchingNextPage || isFetching} onClick={() => fetchNextPage()}>
                {isFetchingNextPage ? "Loading more..." : "Load More"}
            </button>
        }

    </AnimatedSection>
}

export default ExploreContainer;