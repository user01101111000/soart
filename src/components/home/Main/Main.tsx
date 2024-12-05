import {FC, JSX} from "react";
import {bg_video} from "../../../utils/assets.tsx";

const Main: FC = (): JSX.Element => {
    return <section className={"main_section"}>

        <video autoPlay loop muted src={bg_video}></video>

        <div className={"main_section_content"}>

            <h1>It's a magnificent day to discover new arts.</h1>

            <p>Art describes a diverse range of cultural activity centered around works utilizing creative or
                imaginative talents, which are expected to evoke a worthwhile experience, generally through an
                expression of emotional power, conceptual ideas, beauty, and/or technical proficiency.</p>

            <button>Explore</button>

        </div>

    </section>
}

export default Main;