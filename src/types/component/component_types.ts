import {Datum} from "../data/data_types.ts";
import * as React from "react";

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