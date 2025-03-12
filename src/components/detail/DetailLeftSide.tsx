import { FC, JSX, useState } from "react";
import { Tooltip } from "react-tooltip";
import { saveAs } from 'file-saver';
import art_time_display from "../../utils/art_time_display.ts";
import ShareComponent from "../ui/ShareComponent.tsx";
import { AnimatePresence } from "motion/react";
import { DetailLeftSideProps } from "../../types/component/component_types.ts";

const DetailLeftSide: FC<DetailLeftSideProps> = (props: DetailLeftSideProps): JSX.Element => {

    const [showShare, setShowShare] = useState<boolean>(false);


    return <div className={"detail_box_left_side"}>

        <AnimatePresence>
            {showShare && <ShareComponent showShare={showShare} setShowShare={setShowShare} />}
        </AnimatePresence>


        <div className={"icons_area"}>

            <div data-tooltip-id={"share"} data-tooltip-content={"Share"} className={"detail_icon_wrapper"}
                onClick={(): void => {
                    setShowShare(true);
                }}>
                <div className={"icon"} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                </div>
            </div>

            <div data-tooltip-id={"download"} data-tooltip-content={"Download image"}
                className={"detail_icon_wrapper"} onClick={async (): Promise<void> => {

                    saveAs(`https://www.artic.edu/iiif/2/${props?.data?.data?.image_id}/full/843,/0/default.jpg`, props?.data?.data?.title + ".jpg")
                }}>
                <div className="icon download">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                </div>
            </div>


            <Tooltip style={{ fontSize: "12px", padding: "10px", letterSpacing: "1px" }} id={"share"} />
            <Tooltip style={{ fontSize: "12px", padding: "10px", letterSpacing: "1px" }} id={"download"} />

        </div>

        <hr />

        <div className={"detail_box_left_side_info"}>

            {props?.data?.data?.artist_title && <div className={"detail_box_left_side_info_item"}>
                <div className="info_item_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>
                </div>
                <p>{props?.data?.data?.artist_title}</p>
            </div>}


            {props?.data?.data?.place_of_origin && <div className={"detail_box_left_side_info_item"}>
                <div className="info_item_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <p>{props.data?.data?.place_of_origin}</p>
            </div>}

            {props?.data?.data?.date_start &&
                <div className={"detail_box_left_side_info_item"}>
                    <div className="info_item_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>
                    </div>
                    <p>{art_time_display(props?.data?.data?.date_start, props?.data?.data?.date_end)}</p></div>}

            {props?.data?.data?.dimensions && <div className={"detail_box_left_side_info_item"}>
                <div className="info_item_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" /><path d="m8 6 2-2" /><path d="m18 16 2-2" /><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" /><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" /></svg>
                </div>
                <p>{props.data?.data?.dimensions}</p></div>}


            {props?.data?.data?.category_titles?.length != 0 &&
                <div className={"detail_box_left_side_info_item category_titles"}>
                    <div className="info_item_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" /><circle cx="7.5" cy="7.5" r=".5" fill="currentColor" /></svg>
                    </div>
                    {props?.data?.data?.category_titles?.map((x: string): JSX.Element => (<span key={x}>{x}</span>))}
                </div>
            }


        </div>


    </div>
}

export default DetailLeftSide;