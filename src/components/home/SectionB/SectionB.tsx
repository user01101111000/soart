import {FC, JSX, MutableRefObject, useRef} from "react";
import ImageComponent from "../../ui/ImageComponent.tsx";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {statue_3} from "../../../utils/assets.tsx"


gsap.registerPlugin(ScrollTrigger);


const SectionB: FC = (): JSX.Element => {

    const img_ref2: MutableRefObject<HTMLImageElement | null> = useRef<HTMLImageElement | null>(null);

    useGSAP((): void => {

        gsap.fromTo(img_ref2.current, {opacity: 0, x: 200, rotate: -45}, {
            scrollTrigger: {
                trigger: img_ref2.current,
            },
            delay: 0.5,
            x: 0,
            rotate: 0,
            opacity: 1,
            duration: 2
        });

        gsap.fromTo(".section_b_content", {opacity: 0, x: -200}, {
            scrollTrigger: {
                trigger: ".section_b_content",
            },
            delay: 0.5,
            x: 0,
            opacity: 1,
            duration: 2
        });


    })

    return <section className={"section_a section_b"}>


        <div className={"section_b_content"}>
            <h1>Cenab Black</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>

            <button>Explore</button>

        </div>

        <div className={"section_a_img_container section_b_img_container"}>
            <ImageComponent alt_text={"statue_2"} src_text={statue_3} ref_text={img_ref2}/>
        </div>

    </section>
}

export default SectionB;