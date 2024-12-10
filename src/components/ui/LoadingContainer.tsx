import {FC, JSX} from "react";
import {loading_2} from "../../utils/assets.tsx"

const LoadingContainer: FC = (): JSX.Element => {
    return <div className={"loading_container_main"}>
        <img src={loading_2} alt="loading" loading={"lazy"} width={"12px"} height={"auto"}/>
    </div>

}

export default LoadingContainer;