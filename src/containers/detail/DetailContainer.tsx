import { FC, JSX } from "react";
import AnimatedSection from "../../components/ui/AnimatedSection.tsx";
import { useParams } from "react-router-dom";
import useGetOneArtwork from "../../hooks/service/useGetOneArtwork.tsx";
import { loading_2 } from "../../utils/assets.tsx";
import DetailLeftSide from "../../components/detail/DetailLeftSide.tsx";
import DetailMainSide from "../../components/detail/DetailMainSide.tsx";
import DetailRightSide from "../../components/detail/DetailRightSide.tsx";

const DetailContainer: FC = (): JSX.Element => {

    const { id } = useParams<string>();

    const { data, isLoading, isError } = useGetOneArtwork(id!);

    if (isLoading) return <div
        style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}><img
            src={loading_2} alt={"loading"} width={"18px"}
            height={"auto"} /></div>

    if (isError) return <div>Something went wrong</div>

    return <AnimatedSection class_name={"detail_container"}>
        <p className={"art_title"}>{data?.data.title}</p>

        <div className={"detail_box"}>
            <DetailLeftSide data={data!} />
            <DetailMainSide data={data!} />
            <DetailRightSide data={data!} />
        </div>


    </AnimatedSection>
}

export default DetailContainer;