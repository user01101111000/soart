import {FC, JSX} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Features: FC = (): JSX.Element => {

    useGSAP((): void => {

        gsap.fromTo(".features", {opacity: 0}, {
            scrollTrigger: {
                trigger: ".feature_box",
                // start: "top center",
                // end: "bottom center",
                // markers: true
            },
            opacity: 1,
            duration: 2
        })
    })

    return <section className={"features"}>
        <h1 className={"features_title"}>You can see it here.</h1>


        <div className={"features_container"}>

            <div className={"feature_box"}>
                <h1>Minimalism</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>

                <a href="https://github.com/" target={"_blank"}>Learn More</a>

            </div>

            <div className={"feature_box"}>
                <h1>Accessibility</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>

                <a href="https://github.com/" target={"_blank"}>Learn More</a>

            </div>

            <div className={"feature_box"}>
                <h1>Quality</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>

                <a href="https://github.com/" target={"_blank"}>Learn More</a>

            </div>

        </div>

    </section>
}

export default Features