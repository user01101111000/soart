import {FC, JSX} from "react";
import {IArtwork} from "../../types/data/data_types_2.ts";

type DetailMainSideProps = {
    data: IArtwork
}

const DetailMainSide: FC<DetailMainSideProps> = (props: DetailMainSideProps): JSX.Element => {


    console.log(props.data.data.description);


    return <div className={"detail_box_main_side"}>
        <figure>
            <img src={`https://www.artic.edu/iiif/2/${props.data?.data.image_id}/full/843,/0/default.jpg`}
                 alt={props.data?.data.thumbnail.alt_text}/>

            <figcaption>
                {props.data?.data.title}, {props.data?.data.artist_display}
            </figcaption>
        </figure>


        {props?.data?.data?.description && <div className={"art_description art_text"}
                                                dangerouslySetInnerHTML={{__html: props.data.data.description as TrustedHTML}}/>}

        {props?.data?.data?.publication_history && <div className={"art_publication art_text"}
                                                        dangerouslySetInnerHTML={{__html: "<span>Publication history : </span>" + props.data?.data.publication_history}}/>}


        {props?.data?.data?.exhibition_history && <div className={"art_exhibition art_text"}
                                                       dangerouslySetInnerHTML={{__html: "<span>Exhibition history : </span>" + props.data?.data.exhibition_history}}/>}


    </div>
}

export default DetailMainSide