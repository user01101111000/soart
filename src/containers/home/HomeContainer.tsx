import {FC, JSX} from "react";
import Hero from "../../components/home/Hero/Hero.tsx";
import Features from "../../components/home/Features/Features.tsx";
import Main from "../../components/home/Main/Main.tsx";
import AnimatedSection from "../../components/ui/AnimatedSection.tsx";


const HomeContainer: FC = (): JSX.Element => {

    return <AnimatedSection class_name={"home_container"}>
        <Main/>
        <Hero/>
        <Features/>
    </AnimatedSection>
}

export default HomeContainer;