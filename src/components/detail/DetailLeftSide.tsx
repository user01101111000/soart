import {FC, JSX} from "react";
import {IArtwork} from "../../types/data/data_types_2.ts";
import {IoShareSocialSharp} from "react-icons/io5";
import {MdDownload, MdLocationOn} from "react-icons/md";
import {Tooltip} from "react-tooltip";
import {LuPalette} from "react-icons/lu";
import {FaRegCalendarAlt} from "react-icons/fa";
import {saveAs} from 'file-saver';


type DetailLeftSideProps = {
    data: IArtwork
}

const DetailLeftSide: FC<DetailLeftSideProps> = (props: DetailLeftSideProps): JSX.Element => {
    return <div className={"detail_box_left_side"}>

        <div className={"icons_area"}>

            <div data-tooltip-id={"share"} data-tooltip-content={"Share"} className={"detail_icon_wrapper"}>
                <IoShareSocialSharp className={"icon"}/>
            </div>

            <div data-tooltip-id={"download"} data-tooltip-content={"Download image"}
                 className={"detail_icon_wrapper"} onClick={async (): Promise<void> => {

                saveAs(`https://www.artic.edu/iiif/2/${props.data?.data.image_id}/full/843,/0/default.jpg`, props.data.data.title + ".jpg")
            }}>
                <MdDownload className={"icon download"}/>
            </div>


            <Tooltip style={{fontSize: "12px", padding: "10px", letterSpacing: "1px"}} id={"share"}/>
            <Tooltip style={{fontSize: "12px", padding: "10px", letterSpacing: "1px"}} id={"download"}/>

        </div>

        <hr/>

        <div className={"detail_box_left_side_info"}>

            {props?.data?.data?.artist_title && <div className={"detail_box_left_side_info_item"}>
                <LuPalette className={"info_item_icon"}/> <h1>{props.data?.data.artist_title}</h1>
            </div>}

            {props?.data?.data?.place_of_origin && <div className={"detail_box_left_side_info_item"}>
                <MdLocationOn className={"info_item_icon"}/> <h1>{props.data?.data.place_of_origin}</h1>
            </div>}

            {props?.data?.data?.artist_display && <div className={"detail_box_left_side_info_item"}>
                <FaRegCalendarAlt className={"info_item_icon"}/> <h1>{props.data?.data.artist_display}</h1>
            </div>}


        </div>


    </div>
}

export default DetailLeftSide;