import {FC, JSX} from "react";
import {DetailRightSideProps} from "../../types/component/component_types.ts";

const DetailRightSide: FC<DetailRightSideProps> = (props: DetailRightSideProps): JSX.Element => {
    return <div className={"detail_box_right_side"}>
        {props.data?.data.short_description && <>
            <p className={"short_description"}>{props.data?.data.short_description}</p>
            <hr/>
        </>}
        <p className={"license_text"}>{props.data?.info.license_text}</p>
    </div>
}

export default DetailRightSide;