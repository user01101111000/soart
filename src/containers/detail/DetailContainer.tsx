import React from "react";
import AnimatedSection from "../../components/ui/AnimatedSection.tsx";
import { useParams } from "react-router";
import useGetOneArtwork from "../../hooks/service/useGetOneArtwork.tsx";
import { loading_2 } from "../../utils/assets.tsx";
import DetailLeftSide from "../../components/detail/DetailLeftSide.tsx";
import DetailMainSide from "../../components/detail/DetailMainSide.tsx";
import DetailRightSide from "../../components/detail/DetailRightSide.tsx";

const DetailContainer: React.FC = (): React.JSX.Element => {

    const { id } = useParams<string>();
    const [imageStatusCheck, setImageStatusCheck] = React.useState(false);
    const [isBadImage, setIsBadImage] = React.useState(false);
    const { data, isLoading, isError } = useGetOneArtwork(id!);

    React.useEffect((): void => {

        const image = new Image();

        if (data) {

            image.src = `https://www.artic.edu/iiif/2/${data?.data.image_id}/full/843,/0/default.jpg`;

            image.onerror = (): void => {
                setImageStatusCheck(true);
                setIsBadImage(true);
            };

            image.onload = (): void => {
                setImageStatusCheck(true);
            };

        }

    }, [data]);


    if (isLoading || !imageStatusCheck) return <div
        style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}><img
            src={loading_2} alt={"loading"} width={"18px"}
            height={"auto"} /></div>

    if (isError) return <div>Something went wrong</div>

    return <AnimatedSection class_name={"detail_container"}>
        <p className={"art_title"}>{data?.data.title}</p>

        <div className={"detail_box"}>
            <DetailLeftSide data={data!} />
            <DetailMainSide data={data!} IsBadImage={isBadImage} />
            <DetailRightSide data={data!} />
        </div>


    </AnimatedSection>
}

export default DetailContainer;