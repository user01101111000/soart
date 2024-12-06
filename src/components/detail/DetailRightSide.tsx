import {FC, JSX} from "react";
import {IArtwork} from "../../types/data/data_types_2.ts";

type DetailRightSideProps = {
    data: IArtwork
}


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