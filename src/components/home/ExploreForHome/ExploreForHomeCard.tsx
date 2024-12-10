import {FC, JSX, SyntheticEvent} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {ExploreForHomeCardProps} from "../../../types/component/component_types.ts";


const ExploreForHomeCard: FC<ExploreForHomeCardProps> = (props: ExploreForHomeCardProps): JSX.Element => {

    const navigate: NavigateFunction = useNavigate();

    return <div className={"explore_for_home_card"} onClick={(): void => {
        navigate("/explore/" + props.data.data.id);
    }}>
        <h1>{props?.data?.data?.artist_title}</h1>
        <img src={props?.data?.data?.thumbnail?.lqip}
             data-src={`https://www.artic.edu/iiif/2/${props?.data?.data?.image_id}/full/843,/0/default.jpg`}
             alt={props?.data?.data?.title}
             onLoad={(e: SyntheticEvent<HTMLImageElement>): void => {
                 e.currentTarget.src = e.currentTarget.dataset.src || e.currentTarget.src;
             }}
        />
        <div className={"middle_cont"}>
            <h2>{props?.data?.data?.title}</h2>
            <p>{props?.data?.data?.place_of_origin}</p>
        </div>
        <a href="#">Read more</a>
    </div>
}

export default ExploreForHomeCard;