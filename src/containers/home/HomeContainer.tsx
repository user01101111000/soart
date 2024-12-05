import {FC, JSX} from "react";
import Hero from "../../components/home/Hero/Hero.tsx";
import Features from "../../components/home/Features/Features.tsx";
import Main from "../../components/home/Main/Main.tsx";


const HomeContainer: FC = (): JSX.Element => {

    return <section className={"home_container"}>
        <Main/>
        <Hero/>
        <Features/>
    </section>
}

export default HomeContainer;