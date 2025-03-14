import React from "react";
import { NavigateFunction, useNavigate } from "react-router";
import { ArtCardProps } from "../../types/component/component_types.ts";
import { image_not_found } from "../../utils/assets.tsx";

const ArtCard: React.FC<ArtCardProps> = (props: ArtCardProps): React.JSX.Element => {

    const navigate: NavigateFunction = useNavigate();
    const [isErrorImage, setIsErrorImage] = React.useState(false);

    return <div className={"artwork_box"} onClick={(): void => {
        navigate(`/explore/${props?.artwork?.id}`);
    }}>
        <figure>
            {(props?.artwork?.image_id && !isErrorImage) ?
                <img
                    height={"auto"} width={"auto"}
                    src={props?.artwork?.thumbnail?.lqip ?? "https://img.freepik.com/free-vector/white-blurred-background_1034-249.jpg"}
                    data-src={props?.artwork?.image_id ? `https://www.artic.edu/iiif/2/${props?.artwork?.image_id}/full/843,/0/default.jpg` : "https://img.freepik.com/free-vector/white-blurred-background_1034-249.jpg"}
                    alt={props?.artwork?.thumbnail?.alt_text}
                    title={props?.artwork?.title} loading="eager"
                    onLoad={(e: React.SyntheticEvent<HTMLImageElement>): void => {
                        if (e.currentTarget.src !== e.currentTarget.dataset.src) {
                            e.currentTarget.src = e.currentTarget.dataset.src || e.currentTarget.src;
                        }
                    }}
                    onError={(): void => {
                        setIsErrorImage(true);
                    }}
                />
                :
                <img src={image_not_found} alt="not found image" title="not found image" width={"auto"} height={"auto"} loading="eager" />
            }        </figure>
        <p className="artwork_title">{props?.artwork?.title}</p>
        <p className="artwork_artist">{props?.artwork?.artist_display}</p>
    </div>
}

export default ArtCard;