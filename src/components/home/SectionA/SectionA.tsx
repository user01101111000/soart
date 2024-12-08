import {FC, JSX} from "react";
import {statue_2} from "../../../utils/assets.tsx"


const SectionA: FC = (): JSX.Element => {


    return <section className={"section_a"}>

        <div className={"section_a_img_container"}>
            <img alt={"statue_2"} src={statue_2}/>
        </div>

        <div className={"section_a_content"}>
            <h1>Cenab Black</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>

            <button>Explore</button>

        </div>

    </section>
}

export default SectionA;