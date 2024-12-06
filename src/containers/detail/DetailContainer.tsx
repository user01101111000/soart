import {FC, JSX} from "react";
import AnimatedSection from "../../components/ui/AnimatedSection.tsx";
import {useParams} from "react-router-dom";
import useGetOneArtwork from "../../hooks/service/useGetOneArtwork.tsx";
import {loading_2} from "../../utils/assets.tsx";
import {IoShareSocialSharp} from "react-icons/io5";
import {MdLocationOn} from "react-icons/md";
import {MdDownload} from "react-icons/md";
import {FaRegCalendarAlt} from "react-icons/fa";
import {LuPalette} from "react-icons/lu";
import {Tooltip} from "react-tooltip";

const DetailContainer: FC = (): JSX.Element => {

    const {id} = useParams<string>();

    const {data, isLoading, isError} = useGetOneArtwork(id!);

    if (isLoading) return <div
        style={{height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}><img
        src={loading_2} alt={"loading"} width={"18px"}
        height={"auto"}/></div>

    if (isError) return <div>Something went wrong</div>

    return <AnimatedSection class_name={"detail_container"}>
        <h1 className={"art_title"}>{data?.data.title}</h1>

        <div className={"detail_box"}>
            <div className={"detail_box_left_side"}>

                <div className={"icons_area"}>

                    <div data-tooltip-id={"share"} data-tooltip-content={"Share"} className={"detail_icon_wrapper"}>
                        <IoShareSocialSharp className={"icon"}/>
                    </div>

                    <div data-tooltip-id={"download"} data-tooltip-content={"Download image"}
                         className={"detail_icon_wrapper"}>
                        <MdDownload className={"icon download"}/>
                    </div>


                    <Tooltip id={"share"}/>
                    <Tooltip id={"download"}/>

                </div>

                <hr/>

                <div className={"detail_box_left_side_info"}>

                    <div className={"detail_box_left_side_info_item"}>
                        <LuPalette className={"info_item_icon"}/> <h1>{data?.data.artist_title}</h1>
                    </div>

                    <div className={"detail_box_left_side_info_item"}>
                        <MdLocationOn className={"info_item_icon"}/> <h1>{data?.data.place_of_origin}</h1>
                    </div>

                    <div className={"detail_box_left_side_info_item"}>
                        <FaRegCalendarAlt className={"info_item_icon"}/> <h1>{data?.data.artist_display}</h1>
                    </div>


                </div>


            </div>


            <div className={"detail_box_main_side"}>
                <figure>
                    <img src={`https://www.artic.edu/iiif/2/${data?.data.image_id}/full/843,/0/default.jpg`}
                         alt={data?.data.thumbnail.alt_text}/>

                    <figcaption>
                        {data?.data.title}, {data?.data.artist_display}
                    </figcaption>
                </figure>

                <div className={"art_description art_text"}
                     dangerouslySetInnerHTML={{__html: data?.data.description || ""}}/>

                <div className={"art_publication art_text"}
                     dangerouslySetInnerHTML={{__html: data?.data.publication_history ? "<span>Publication history : </span>" + data?.data.publication_history : ""}}/>

                <div className={"art_exhibition art_text"}
                     dangerouslySetInnerHTML={{__html: data?.data.exhibition_history ? "<span>Exhibition history : </span>" + data?.data.exhibition_history : ""}}/>


            </div>
            <div className={"detail_box_right_side"}>

                {data?.data.short_description && <>
                    <p className={"short_description"}>{data?.data.short_description}</p>
                    <hr/>
                </>}
                <p className={"license_text"}>{data?.info.license_text}</p>
            </div>
        </div>


    </AnimatedSection>
}

export default DetailContainer;