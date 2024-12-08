import {FC, JSX} from "react";
import {motion} from "motion/react"

const Features: FC = (): JSX.Element => {


    return <section className={"features"}>
        <motion.h1 initial={{opacity: 0, scale: 0.9}} viewport={{once: true}} whileInView={{opacity: 1, scale: 1}}
                   transition={{delay: 0.3, duration: 0.5}} className={"features_title"}>You can see it here.
        </motion.h1>


        <div className={"features_container"}>

            <motion.div initial={{opacity: 0, scale: 0.9}} viewport={{once: true}} whileInView={{opacity: 1, scale: 1}}
                        transition={{delay: 0.3, duration: 0.5}} className={"feature_box"}>
                <h1>Minimalism</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>

                <a href="https://github.com/" target={"_blank"}>Learn More</a>

            </motion.div>

            <motion.div initial={{opacity: 0, scale: 0.9}} viewport={{once: true}} whileInView={{opacity: 1, scale: 1}}
                        transition={{delay: 0.4, duration: 0.5}} className={"feature_box"}>
                <h1>Accessibility</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>

                <a href="https://github.com/" target={"_blank"}>Learn More</a>

            </motion.div>

            <motion.div initial={{opacity: 0, scale: 0.9}} viewport={{once: true}} whileInView={{opacity: 1, scale: 1}}
                        transition={{delay: 0.5, duration: 0.5}} className={"feature_box"}>
                <h1>Quality</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>

                <a href="https://github.com/" target={"_blank"}>Learn More</a>

            </motion.div>

        </div>

    </section>
}

export default Features