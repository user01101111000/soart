import {FC, JSX} from "react";
import {statue_3} from "../../../utils/assets.tsx"


const SectionB: FC = (): JSX.Element => {


    return <section className={"section_a section_b"}>


        <div className={"section_b_content"}>
            <h1>Cenab Black</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>

            <button>Explore</button>

        </div>

        <div className={"section_a_img_container section_b_img_container"}>
            <img alt={"statue_2"} src={statue_3}/>
        </div>

    </section>
}

export default SectionB;