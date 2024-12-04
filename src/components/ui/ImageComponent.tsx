import {FC, JSX, MutableRefObject, useEffect} from "react";

type ImageComponentProps = {
    alt_text: string;
    src_text: string;
    class_name_text?: string;
    ref_text?: MutableRefObject<HTMLImageElement | null>;
}

export const preloadImage: (src: string) => Promise<any> = (src: string): Promise<any> => {
    return new Promise((resolve: any, reject: any): void => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
    });
};

const ImageComponent: FC<ImageComponentProps> = (props: ImageComponentProps = {
    alt_text: "",
    src_text: ""
}): JSX.Element => {


    useEffect((): void => {
        preloadImage(props.src_text).then((): void => {
        });
    }, [props.src_text])

    return <img src={props.src_text} alt={props.alt_text} loading={"lazy"} className={props.class_name_text}
                ref={props.ref_text}/>
}

export default ImageComponent;