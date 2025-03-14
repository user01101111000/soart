import { FC, JSX } from "react";
import { statue_1, statue_bg } from "../../../utils/assets.tsx"
import { motion } from "motion/react"

const Hero: FC = (): JSX.Element => {


    return <article className={"hero"}>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} viewport={{ once: true }} whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={"hero_title"}>
            <span>Discover </span>
            <span>the </span>
            <span>new things.</span>
        </motion.div>

        <figure
            className={"statue"}>
            <motion.img title="statue" width={"300px"} height={"auto"} loading="lazy" initial={{ scale: 1, rotate: -45, y: 100 }} whileInView={{
                rotate: 0,
                y: 0,
                scale: 1.5,
            }} transition={{ duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} src={statue_1}
                alt={"statue"} />
            <motion.img title="statue bg" width={"100%"} height={"auto"} loading="lazy" initial={{ scale: 1 }} whileInView={{
                scale: 2.5,
            }} transition={{ duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} src={statue_bg} alt={"statue_bg"}
                className={"statue_bg"} />
        </figure>

    </article>
}

export default Hero;