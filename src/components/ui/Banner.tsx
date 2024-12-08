import {FC, JSX} from "react";
import {motion} from "motion/react"

type BannerProps = {
    title: string,
    subtitle: string,
    button_text: string,
    img_link: string
}

const Banner: FC<BannerProps> = (props: BannerProps): JSX.Element => {
    return <motion.div initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}}
                       transition={{duration: 1, type: "spring", delay: 0.1}} viewport={{once: true}}
                       className={"banner"}>

        <img src={props.img_link} alt="banner" loading={"lazy"}/>

        <div className={"banner_titles"}>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>

        <button>{props.button_text}</button>

    </motion.div>
}

export default Banner;