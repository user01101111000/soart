import {FC, JSX} from "react";
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import {DetailMainSideProps} from "../../types/component/component_types.ts";


const DetailMainSide: FC<DetailMainSideProps> = (props: DetailMainSideProps): JSX.Element => {

    const pub_hist_elements: JSX.Element[] = props?.data?.data?.publication_history ? props?.data?.data?.publication_history.split("\n\n").map((el: string, index: number): JSX.Element =>
        <li key={index} dangerouslySetInnerHTML={{__html: el}}/>) : [];

    const exh_hist_elements: JSX.Element[] = props?.data?.data?.exhibition_history ? props?.data?.data?.exhibition_history.split("\n\n").map((el: string, index: number): JSX.Element =>
        <li key={index} dangerouslySetInnerHTML={{__html: el}}/>) : [];


    const multimedia_res: JSX.Element[] = props?.data?.data?.sound_ids ? props?.data?.data?.sound_ids?.map((el: string, index: number): JSX.Element =>
        <a href={"https://www.artic.edu/assets/" + el} key={index}>Link {index + 1}</a>) : [];

    const educational_res: JSX.Element[] = props?.data?.data?.document_ids ? props?.data?.data?.document_ids?.map((el: string, index: number): JSX.Element =>
        <a href={"https://www.artic.edu/assets/" + el} key={index}>Link {index + 1}</a>) : [];


    return <div className={"detail_box_main_side"}>
        <figure>
            <PhotoProvider>
                <PhotoView src={`https://www.artic.edu/iiif/2/${props?.data?.data?.image_id}/full/843,/0/default.jpg`}>
                    <div className={"figure_2"}>
                        <img src={`https://www.artic.edu/iiif/2/${props?.data?.data?.image_id}/full/843,/0/default.jpg`}
                             alt={props?.data?.data?.thumbnail?.alt_text}/>

                        <div className={"figure_inner_wrapper"}>
                            Click to view
                        </div>
                    </div>
                </PhotoView>
            </PhotoProvider>


            <figcaption>
                {props?.data?.data?.title}, {props?.data?.data?.artist_display}
            </figcaption>
        </figure>


        {props?.data?.data?.description && <div className={"art_description"}
                                                dangerouslySetInnerHTML={{__html: props?.data?.data?.description}}/>}


        {pub_hist_elements?.length > 0 && <details>
            <summary>Publication history</summary>
            <ul>
                {pub_hist_elements}
            </ul>
        </details>}

        {exh_hist_elements?.length > 0 && <details>
            <summary>Exhibition history</summary>
            <ul>
                {exh_hist_elements}
            </ul>
        </details>}

        {props?.data?.data?.provenance_text &&
            <details>
                <summary>Provenance</summary>

                <ul>
                    <li dangerouslySetInnerHTML={{__html: props?.data?.data?.provenance_text}}/>
                </ul>
            </details>}

        {multimedia_res?.length > 0 && <details>
            <summary>Multimedia</summary>
            <ul>
                {multimedia_res}
            </ul>
        </details>}

        {educational_res?.length > 0 && <details>
            <summary>Educational resources</summary>
            <ul>
                {educational_res}
            </ul>
        </details>}


        <hr/>

        <div className={"art_description end_of_art"}>Object information is a work in progress and may be updated as new
            research findings emerge. To help
            improve this record, please email collections@artic.edu. Information about image downloads and licensing is
            available here.
        </div>

    </div>
}

export default DetailMainSide