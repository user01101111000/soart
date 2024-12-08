import {FC, JSX} from "react";
import Hero from "../../components/home/Hero/Hero.tsx";
import Features from "../../components/home/Features/Features.tsx";
import Main from "../../components/home/Main/Main.tsx";
import AnimatedSection from "../../components/ui/AnimatedSection.tsx";
import Banner from "../../components/ui/Banner.tsx";
import ExploreForHome from "../../components/home/ExploreForHome/ExploreForHome.tsx";


const HomeContainer: FC = (): JSX.Element => {

    return <AnimatedSection class_name={"home_container"}>
        <Main/>
        <Hero/>
        <Features/>
        <div className={"banner_wrapper"}>
            <Banner title={"Join Our Community"} subtitle={"The best way to lend your support is to become a member."}
                    button_text={"Become a member"}
                    img_link={"https://cdn.pixabay.com/photo/2019/03/03/20/23/background-4032775_1280.png"}/>
        </div>

        <ExploreForHome/>
    </AnimatedSection>
}

export default HomeContainer;