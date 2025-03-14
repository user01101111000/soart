import {FC, JSX} from "react";
import {NavigateFunction, useNavigate} from "react-router";


const Logo: FC = (): JSX.Element => {

    const navigate: NavigateFunction = useNavigate();

    return <div className={"logo_title"} onClick={(): void => {
        navigate("/");
    }}>
        <span>so</span>
        <span>art</span>
    </div>
}

export default Logo;