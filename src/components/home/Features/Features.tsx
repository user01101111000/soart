import {FC, JSX} from "react";
import features_data from "../../../constants/features_data.ts";

const Features: FC = (): JSX.Element => {

    const feature_items: JSX.Element[] = features_data.map((x: {
        title: string,
        content: string,
        link: string
    }, i: number): JSX.Element => <div
        key={i}
        className={"feature_box"}>
        <p className="feature_title">{x.title}</p>
        <p className="feature_content">{x.content}</p>
        <a href={x.link} target={"_blank"}>Read about {x.title.toLowerCase()}</a>
    </div>)


    return <section className={"features"}>
        <p className={"features_title"}>You can see it here.</p>

        <div className={"features_container"}>
            {feature_items}
        </div>

    </section>
}

export default Features