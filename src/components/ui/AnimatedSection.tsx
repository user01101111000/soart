import {FC, JSX} from "react";
import {AnimatedSectionProps} from "../../types/component/component_types.ts";
import {motion} from "motion/react"


const AnimatedSection: FC<AnimatedSectionProps> = (props: AnimatedSectionProps): JSX.Element => {

    return <motion.section initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.1}}
                           className={props.class_name}>{props.children}</motion.section>;
}

export default AnimatedSection;