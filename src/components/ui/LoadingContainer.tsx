import {FC, JSX} from "react";

const LoadingContainer: FC = (): JSX.Element => {
    return <div className={"loading_container"}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    width: "100%",
                    height: "100vh",

                    position: "fixed",
                    top: 0,
                    left: 0,
                }}>
        <img src="/src/assets/gif/loading.gif" alt="loading" loading={"lazy"} width={"500px"} height={"auto"}/>
    </div>

}

export default LoadingContainer;