import {FC, JSX} from "react";
import Banner from "../../ui/Banner.tsx";
import {BannerProps} from "../../../types/component/component_types.ts";


type BannerComponentProps = {
    data: BannerProps
}

const BannerComponent: FC<BannerComponentProps> = (props: BannerComponentProps): JSX.Element => {
    return <div className={"banner_wrapper"}>
        <Banner title={props.data.title} subtitle={props.data.subtitle} button_text={props.data.button_text}
                img_link={props.data.img_link} page_name={props.data.page_name}/>
    </div>
}

export default BannerComponent;