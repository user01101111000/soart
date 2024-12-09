import {FC, JSX, useState} from "react";
import {IoShareSocialSharp} from "react-icons/io5";
import {MdDownload, MdLocationOn} from "react-icons/md";
import {Tooltip} from "react-tooltip";
import {LuPalette} from "react-icons/lu";
import {FaRegCalendarAlt} from "react-icons/fa";
import {saveAs} from 'file-saver';
import {BsTagFill} from "react-icons/bs";
import {RxDimensions} from "react-icons/rx";
import art_time_display from "../../utils/art_time_display.ts";
import ShareComponent from "../ui/ShareComponent.tsx";
import {AnimatePresence} from "motion/react";
import {DetailLeftSideProps} from "../../types/component/component_types.ts";


const DetailLeftSide: FC<DetailLeftSideProps> = (props: DetailLeftSideProps): JSX.Element => {


    const [showShare, setShowShare] = useState<boolean>(false);


    return <div className={"detail_box_left_side"}>

        <AnimatePresence>
            {showShare && <ShareComponent showShare={showShare} setShowShare={setShowShare}/>}
        </AnimatePresence>


        <div className={"icons_area"}>

            <div data-tooltip-id={"share"} data-tooltip-content={"Share"} className={"detail_icon_wrapper"}
                 onClick={(): void => {
                     setShowShare(true);
                 }}>
                <IoShareSocialSharp className={"icon"}/>
            </div>

            <div data-tooltip-id={"download"} data-tooltip-content={"Download image"}
                 className={"detail_icon_wrapper"} onClick={async (): Promise<void> => {

                saveAs(`https://www.artic.edu/iiif/2/${props?.data?.data?.image_id}/full/843,/0/default.jpg`, props?.data?.data?.title + ".jpg")
            }}>
                <MdDownload className={"icon download"}/>
            </div>


            <Tooltip style={{fontSize: "12px", padding: "10px", letterSpacing: "1px"}} id={"share"}/>
            <Tooltip style={{fontSize: "12px", padding: "10px", letterSpacing: "1px"}} id={"download"}/>

        </div>

        <hr/>

        <div className={"detail_box_left_side_info"}>

            {props?.data?.data?.artist_title && <div className={"detail_box_left_side_info_item"}>
                <LuPalette className={"info_item_icon"}/> <h1>{props?.data?.data?.artist_title}</h1>
            </div>}


            {props?.data?.data?.place_of_origin && <div className={"detail_box_left_side_info_item"}>
                <MdLocationOn className={"info_item_icon"}/> <h1>{props.data?.data?.place_of_origin}</h1>
            </div>}

            {props?.data?.data?.date_start &&
                <div className={"detail_box_left_side_info_item"}><FaRegCalendarAlt className={"info_item_icon"}/>
                    <h1>{art_time_display(props?.data?.data?.date_start, props?.data?.data?.date_end)}</h1></div>}

            {props?.data?.data?.dimensions && <div className={"detail_box_left_side_info_item"}>
                <RxDimensions className={"info_item_icon"}/> <h1>{props.data?.data?.dimensions}</h1></div>}


            {props?.data?.data?.category_titles?.length != 0 &&
                <div className={"detail_box_left_side_info_item category_titles"}>
                    <BsTagFill className={"info_item_icon"}/>
                    {props?.data?.data?.category_titles?.map((x: string): JSX.Element => (<span key={x}>{x}</span>))}
                </div>
            }


        </div>


    </div>
}

export default DetailLeftSide;