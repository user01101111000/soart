import {FC, JSX} from "react";
import AnimatedSection from "../../components/ui/AnimatedSection.tsx";
import {useParams} from "react-router-dom";
import useGetOneArtwork from "../../hooks/service/useGetOneArtwork.tsx";
import {loading_2} from "../../utils/assets.tsx";

const DetailContainer: FC = (): JSX.Element => {

    const {id} = useParams<string>();

    const {data, isLoading, isError} = useGetOneArtwork(id!);

    if (isLoading) return <div
        style={{height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}><img
        src={loading_2} alt={"loading"} width={"18px"}
        height={"auto"}/></div>

    if (isError) return <div>Something went wrong</div>

    console.log(data);

    return <AnimatedSection class_name={"detail_container"}>DetailContainer</AnimatedSection>
}

export default DetailContainer;