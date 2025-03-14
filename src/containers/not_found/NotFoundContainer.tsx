import {FC, JSX} from "react";
import AnimatedSection from "../../components/ui/AnimatedSection.tsx";
import {NavigateFunction, useNavigate} from "react-router";

const NotFoundContainer: FC = (): JSX.Element => {

    const navigate: NavigateFunction = useNavigate();

    return <AnimatedSection class_name={"not_found_container"}>
        <h1>Page not found.</h1>
        <button onClick={(): void => {
            navigate("/")
        }}>Go Home
        </button>
    </AnimatedSection>
}

export default NotFoundContainer;