import {FC, JSX} from "react";
import AnimatedSection from "../../components/ui/AnimatedSection.tsx";
import {useParams} from "react-router-dom";
import useGetOneArtwork from "../../hooks/service/useGetOneArtwork.tsx";
import {loading_2} from "../../utils/assets.tsx";

const DetailContainer: FC = (): JSX.Element => {

    const {id} = useParams<string>();

    const {data, isLoading, isError} = useGetOneArtwork(id!);

    if (isLoading) return <div
        style={{height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}><img
        src={loading_2} alt={"loading"} width={"18px"}
        height={"auto"}/></div>

    if (isError) return <div>Something went wrong</div>

    console.log(data);

    return <AnimatedSection class_name={"detail_container"}>
        <h1 className={"art_title"}>{data?.data.title}</h1>

        <div className={"detail_box"}>
            <div className={"detail_box_left_side"}>a</div>
            <div className={"detail_box_main_side"}>
                <figure>
                    <img src={`https://www.artic.edu/iiif/2/${data?.data.image_id}/full/843,/0/default.jpg`}
                         alt={data?.data.thumbnail.alt_text}/>

                    <figcaption>
                        {data?.data.title}, {data?.data.artist_display}
                    </figcaption>
                </figure>

                <div className={"art_description art_text"}
                     dangerouslySetInnerHTML={{__html: data?.data.description || ""}}/>

                <div className={"art_publication art_text"}
                     dangerouslySetInnerHTML={{__html: data?.data.publication_history ? "<span>Publication history : </span>" + data?.data.publication_history : ""}}/>

                <div className={"art_exhibition art_text"}
                     dangerouslySetInnerHTML={{__html: data?.data.exhibition_history ? "<span>Exhibition history : </span>" + data?.data.exhibition_history : ""}}/>


            </div>
            <div className={"detail_box_right_side"}>c</div>
        </div>


    </AnimatedSection>
}

export default DetailContainer;