import {FC, JSX, MutableRefObject, useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {AnimatedSectionProps} from "../../types/component/component_types.ts";

gsap.registerPlugin(useGSAP);


const AnimatedSection: FC<AnimatedSectionProps> = (props: AnimatedSectionProps): JSX.Element => {

    const con: MutableRefObject<HTMLElement | null> = useRef(null);

    useGSAP((): void => {
        gsap.fromTo(con.current, {opacity: 0}, {
            opacity: 1,
            duration: 0.5,
        })
    })


    return <section ref={con} className={props.class_name}>{props.children}</section>;
}

export default AnimatedSection;