import {FC, JSX, MutableRefObject, useRef} from "react";
import * as React from "react";

import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);

type AnimatedSectionProps = {
    class_name?: string,
    children?: React.ReactNode
}

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