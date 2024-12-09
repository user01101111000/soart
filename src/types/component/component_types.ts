import {Datum} from "../data/data_types.ts";
import * as React from "react";
import {Dispatch, SetStateAction} from "react";
import {IArtwork} from "../data/data_types_2.ts";

export type ArtCardProps = {
    artwork: Datum
}

export type AnimatedSectionProps = {
    class_name?: string,
    children?: React.ReactNode
}

export type ProvidersProps = {
    children: React.ReactNode
}
export type BannerProps = {
    title: string,
    subtitle: string,
    button_text: string,
    img_link: string,
    page_name: string
}

export type ShareComponentProps = {
    setShowShare: Dispatch<SetStateAction<boolean>>,
    showShare: boolean,
};

export type ExploreForHomeCardProps = {
    data: IArtwork
}

export type DetailLeftSideProps = {
    data: IArtwork
}

export type DetailMainSideProps = {
    data: IArtwork
}
export type DetailRightSideProps = {
    data: IArtwork
}


