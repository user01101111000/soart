import { FC, JSX, SyntheticEvent } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ArtCardProps } from "../../types/component/component_types.ts";

const ArtCard: FC<ArtCardProps> = (props: ArtCardProps): JSX.Element => {

    const navigate: NavigateFunction = useNavigate();


    return <div className={"artwork_box"} onClick={(): void => {
        navigate(`/explore/${props?.artwork?.id}`);
    }}>
        <figure>
            <img
                height={"auto"} width={"auto"}
                src={props?.artwork?.thumbnail?.lqip ?? "https://img.freepik.com/free-vector/white-blurred-background_1034-249.jpg"}
                data-src={props?.artwork?.image_id ? `https://www.artic.edu/iiif/2/${props?.artwork?.image_id}/full/843,/0/default.jpg` : "https://img.freepik.com/free-vector/white-blurred-background_1034-249.jpg"}
                alt={props?.artwork?.thumbnail?.alt_text}
                onLoad={(e: SyntheticEvent<HTMLImageElement>): void => {
                    e.currentTarget.src = e.currentTarget.dataset.src || e.currentTarget.src;
                }}
                title={props?.artwork?.title} loading="eager" />
        </figure>
        <p className="artwork_title">{props?.artwork?.title}</p>
        <p className="artwork_artist">{props?.artwork?.artist_display}</p>
    </div>
}

export default ArtCard;