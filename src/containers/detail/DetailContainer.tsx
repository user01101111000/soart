import {FC, JSX} from "react";
import AnimatedSection from "../../components/ui/AnimatedSection.tsx";
import {useParams} from "react-router-dom";

const DetailContainer: FC = (): JSX.Element => {

    const {id} = useParams<string>();

    console.log(id)


    return <AnimatedSection class_name={"detail_container"}>DetailContainer</AnimatedSection>
}

export default DetailContainer;