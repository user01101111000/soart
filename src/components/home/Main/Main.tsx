import React, { FC, JSX, useState } from "react";
import { blur_bg } from "../../../utils/assets.tsx";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Main: FC = (): JSX.Element => {

    const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

    const navigate: NavigateFunction = useNavigate();


    React.useLayoutEffect((): () => void => {

        const video: HTMLVideoElement = document.createElement('video');

        video.oncanplaythrough = (): void => {
            setIsVideoLoaded(true);
        };

        video.src = '/videos/bg_video.mp4';
        video.load();

        return (): void => {
            video.src = '';
        };
    }, []);


    return <section className={"main_section"}>

        {isVideoLoaded ? (
            <video preload="auto" autoPlay loop muted>
                <source src="/videos/bg_video.mp4" />
            </video>
        ) : <img title="video blur" width={"100%"} height={"100%"} src={blur_bg} alt={"blur_video"} loading="eager" style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            objectFit: "cover",
            objectPosition: "center"
        }} />}


        <div className={"main_section_content"}>

            <h1>It's a magnificent day to discover new arts.</h1>

            <p>Art describes a diverse range of cultural activity centered around works utilizing creative or
                imaginative talents, which are expected to evoke a worthwhile experience, generally through an
                expression of emotional power, conceptual ideas, beauty, and/or technical proficiency.</p>

            <button onClick={(): void => {
                navigate("/explore");
            }}>Explore
            </button>

        </div>

    </section>
}

export default Main;