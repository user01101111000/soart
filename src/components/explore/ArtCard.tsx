import {FC, JSX, SyntheticEvent} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {ArtCardProps} from "../../types/component/component_types.ts";

const ArtCard: FC<ArtCardProps> = (props: ArtCardProps): JSX.Element => {

    const navigate: NavigateFunction = useNavigate();


    return <div className={"artwork_box"} onClick={(): void => {
        navigate(`/explore/${props?.artwork?.id}`);
    }}>
        <figure>
            <img

                src={props.artwork.thumbnail.lqip}
                data-src={`https://www.artic.edu/iiif/2/${props?.artwork?.image_id}/full/843,/0/default.jpg`}
                alt={props?.artwork?.thumbnail?.alt_text}
                onLoad={(e: SyntheticEvent<HTMLImageElement>): void => {
                    e.currentTarget.src = e.currentTarget.dataset.src || e.currentTarget.src;
                }}
                loading={"lazy"}/>
        </figure>
        <h1>{props?.artwork?.title}</h1>
        <p>{props?.artwork?.artist_display}</p>
    </div>
}

export default ArtCard;