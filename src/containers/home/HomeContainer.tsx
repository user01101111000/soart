import {FC, JSX} from "react";
import Hero from "../../components/home/Hero/Hero.tsx";
import Features from "../../components/home/Features/Features.tsx";
import Main from "../../components/home/Main/Main.tsx";
import AnimatedSection from "../../components/ui/AnimatedSection.tsx";
import ExploreForHome from "../../components/home/ExploreForHome/ExploreForHome.tsx";
import BannerComponent from "../../components/home/BannerComponent/BannerComponent.tsx";


const HomeContainer: FC = (): JSX.Element => {

    return <AnimatedSection class_name={"home_container"}>
        <Main/>
        <Hero/>
        <Features/>
        <BannerComponent data={{
            title: "Join Our Community",
            subtitle: "The best way to lend your support is to become a member.",
            button_text: "Become a member",
            img_link: "https://www.theartpostblog.com/wp-content/uploads/2021/11/img-Abstract-Art-Techniques.jpg"
        }}/>
        <ExploreForHome/>

        <BannerComponent data={{
            title: "Join Our Community",
            subtitle: "The best way to lend your support is to become a member.",
            button_text: "Become a member",
            img_link: "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg"
        }}/>

    </AnimatedSection>
}

export default HomeContainer;