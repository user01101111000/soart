import {FC, JSX} from "react";
import Hero from "../../components/home/Hero/Hero.tsx";
import Features from "../../components/home/Features/Features.tsx";
import SectionA from "../../components/home/SectionA/SectionA.tsx";
import SectionB from "../../components/home/SectionB/SectionB.tsx";


const HomeContainer: FC = (): JSX.Element => {

    return <section className={"home_container"}>
        <Hero/>
        <Features/>
        <SectionA/>
        <SectionB/>
    </section>
}

export default HomeContainer;