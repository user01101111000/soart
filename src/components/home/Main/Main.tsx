import { FC, JSX, useState } from "react";
import { blur_bg } from "../../../utils/assets.tsx";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Main: FC = (): JSX.Element => {

    const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

    const handleVideoLoad: () => void = (): void => {
        setIsVideoLoaded(true);
    };

    const navigate: NavigateFunction = useNavigate();

    return <section className={"main_section"}>

        {!isVideoLoaded &&
            <img title="video blur" width={"20px"} height={"20px"} src={blur_bg} alt={"blur"} loading={"lazy"} style={{
                position: "absolute",
                inset: 0,
                height: "100%",
                width: "100%",
                zIndex: 1
            }} />}


        <video preload="auto" autoPlay loop muted onCanPlayThrough={handleVideoLoad}>
            <source src="/videos/bg_video.mp4" />
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