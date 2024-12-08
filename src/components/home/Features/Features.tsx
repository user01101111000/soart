import {FC, JSX} from "react";
import {motion} from "motion/react"
import features_data from "../../../service/features/features_data.ts";

const Features: FC = (): JSX.Element => {

    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    }
    const variants = {
        hidden: {opacity: 0, scale: 0.9},
        visible: (index: number): { opacity: number, scale: number, transition: { delay: number } } => ({
            opacity: 1,
            scale: 1,
            transition: {delay: index * 0.3}
        }),
    }


    const feature_items: JSX.Element[] = features_data.map((x: {
        title: string,
        content: string,
        link: string
    }, i: number): JSX.Element => <motion.div
        key={i} custom={i}
        variants={variants}
        className={"feature_box"}>
        <h1>{x.title}</h1>
        <p>{x.content}</p>
        <a href={x.link} target={"_blank"}>Learn More</a>
    </motion.div>)


    return <section className={"features"}>
        <motion.h1 initial={{opacity: 0, scale: 0.9}} viewport={{once: true}} whileInView={{opacity: 1, scale: 1}}
                   transition={{delay: 0.3, duration: 0.5}} className={"features_title"}>You can see it here.
        </motion.h1>


        <motion.div initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    variants={list} className={"features_container"}>
            {feature_items}
        </motion.div>

    </section>
}

export default Features