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
            title: "Explore Our Collection",
            subtitle: "Come to Explore section to see the new artworks every day.",
            button_text: "Explore now",
            img_link: "https://www.theartpostblog.com/wp-content/uploads/2021/11/img-Abstract-Art-Techniques.jpg",
            page_name: "/explore"
        }}/>

        <ExploreForHome/>

        <BannerComponent data={{
            title: "About soart",
            subtitle: "What is soart ? Learn more about us.",
            button_text: "About soart",
            img_link: "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
            page_name: "/about"
        }}/>

    </AnimatedSection>
}

export default HomeContainer;