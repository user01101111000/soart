import React from "react";
import { blur_bg, bg_video } from "../../../utils/assets.tsx";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Main: React.FC = (): React.JSX.Element => {

    const [isVideoLoaded, setIsVideoLoaded] = React.useState<boolean>(false);

    const navigate: NavigateFunction = useNavigate();

    function handlePlay(): void {
        setIsVideoLoaded(true);
    }

    return <section className={"main_section"}>

        {!isVideoLoaded && <img sizes="100vw" title="video blur" width={"100%"} height={"100%"} src={blur_bg} alt={"blur_video"} loading="eager" style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            objectFit: "cover",
            objectPosition: "center"
        }} />}

        <video preload="metadata" autoPlay loop muted playsInline poster={blur_bg} onCanPlayThrough={handlePlay}>
            <source src={bg_video} type="video/mp4" />
        </video>

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