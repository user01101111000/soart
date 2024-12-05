import {FC, JSX, MutableRefObject, useRef,} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import ImageComponent from "../../ui/ImageComponent.tsx";
import {statue_1, statue_bg} from "../../../utils/assets.tsx"
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin([ScrollTrigger, useGSAP]);

const Hero: FC = (): JSX.Element => {


    const img1: MutableRefObject<HTMLImageElement | null> = useRef(null);
    const img2: MutableRefObject<HTMLImageElement | null> = useRef(null);


    useGSAP((): void => {

        gsap.fromTo(img1.current, {scale: 1, rotate: -45, y: 100}, {
            scrollTrigger: {
                trigger: ".statue",
            },
            rotate: 0,
            y: 0,
            scale: 1.5,
            duration: 2,
        });

        gsap.fromTo(img2.current, {scale: 1}, {
            scrollTrigger: {
                trigger: ".statue",
            },
            scale: 2.5,
            duration: 2,
        });


    })

    return <article className={"hero"}>

        <div
            className={"hero_title"}>
            <span>Discover </span>
            <span>the </span>
            <span>new things.</span>
        </div>

        <figure
            className={"statue"}>
            <ImageComponent alt_text={"statue"} src_text={statue_1} ref_text={img1}/>
            <ImageComponent src_text={statue_bg} alt_text={"statue_bg"} class_name_text={"statue_bg"}
                            ref_text={img2}/>
        </figure>


    </article>
}

export default Hero;