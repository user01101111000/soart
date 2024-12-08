import {Dispatch, FC, JSX, SetStateAction, useEffect} from "react";
import {IoMdClose} from "react-icons/io";
import {
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    InstapaperShareButton,
    InstapaperIcon,
    TwitterShareButton,
    TwitterIcon,
    FacebookShareButton,
    FacebookIcon,
    EmailShareButton,
    EmailIcon,
    TelegramShareButton,
    TelegramIcon,
    PinterestShareButton,
    RedditShareButton,
    RedditIcon,
    PinterestIcon,
    VKShareButton,
    VKIcon,
    OKShareButton,
    OKIcon,
    TumblrShareButton,
    TumblrIcon,
} from "react-share"
import {LuLink} from "react-icons/lu";
import {motion} from "motion/react"


type ShareComponentProps = {
    setShowShare: Dispatch<SetStateAction<boolean>>,
    showShare: boolean,
};

const ShareComponent: FC<ShareComponentProps> = (props: ShareComponentProps): JSX.Element => {

    useEffect((): () => void => {
        props.showShare ? document.body.style.overflow = "hidden" :
            document.body.style.overflow = "auto";

        return (): void => {
            document.body.style.overflow = "auto";
        };
    }, [props.showShare]);


    return <div className={"share_component"}>


        <motion.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}}
                    className={"share_box"}>

            <div className={"close_button_area"}>
                <IoMdClose className={"icon"} onClick={(): void => {
                    props.setShowShare(false);
                }}/>

            </div>

            <h1 className={"share_title"}>Share it with your friends.</h1>


            <div className={"share_icons_area"}>
                <WhatsappShareButton url={window.location.href}>
                    <WhatsappIcon round size={40}/>
                </WhatsappShareButton>

                <LinkedinShareButton url={window.location.href}>
                    <LinkedinIcon round size={40}/>
                </LinkedinShareButton>

                <InstapaperShareButton url={window.location.href}>
                    <InstapaperIcon round size={40}/>
                </InstapaperShareButton>

                <TwitterShareButton url={window.location.href}>
                    <TwitterIcon round size={40}/>
                </TwitterShareButton>

                <FacebookShareButton url={window.location.href}>
                    <FacebookIcon round size={40}/>
                </FacebookShareButton>

                <EmailShareButton url={window.location.href}>
                    <EmailIcon round size={40}/>
                </EmailShareButton>

                <TelegramShareButton url={window.location.href}>
                    <TelegramIcon round size={40}/>
                </TelegramShareButton>


                <RedditShareButton url={window.location.href}>
                    <RedditIcon round size={40}/>
                </RedditShareButton>

                <PinterestShareButton media={window.location.href} url={window.location.href}>
                    <PinterestIcon round size={40}/>
                </PinterestShareButton>

                <VKShareButton url={window.location.href}>
                    <VKIcon round size={40}/>
                </VKShareButton>

                <OKShareButton url={window.location.href}>
                    <OKIcon round size={40}/>
                </OKShareButton>

                <TumblrShareButton url={window.location.href}>
                    <TumblrIcon round size={40}/>
                </TumblrShareButton>
            </div>


            <div className={"url_area"}>

                <div className={"url_text"}>
                    {window.location.href}
                </div>

                <button onClick={(): void => {
                    navigator.clipboard.writeText(window.location.href);

                    props.setShowShare(false);
                }}><LuLink/> Copy <LuLink/></button>

            </div>

        </motion.div>

    </div>;
}

export default ShareComponent;