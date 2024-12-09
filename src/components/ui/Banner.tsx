import {FC, JSX} from "react";
import {BannerProps} from "../../types/component/component_types.ts";
import {NavigateFunction, useNavigate} from "react-router-dom";

const Banner: FC<BannerProps> = (props: BannerProps): JSX.Element => {

    const navigate: NavigateFunction = useNavigate();

    return <div className={"banner"}>

        <img src={props.img_link} alt="banner" loading={"lazy"}/>

        <div className={"banner_titles"}>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>

        <button onClick={(): void => {
            navigate(props.page_name);
        }}>{props.button_text}</button>

    </div>
}

export default Banner;