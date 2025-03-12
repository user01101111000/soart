import { FC, JSX, useEffect } from "react";
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
import { motion } from "motion/react"
import { ShareComponentProps } from "../../types/component/component_types.ts";


const ShareComponent: FC<ShareComponentProps> = (props: ShareComponentProps): JSX.Element => {

    useEffect((): () => void => {
        if (props.showShare) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";


        return (): void => {
            document.body.style.overflow = "auto";
        };
    }, [props.showShare]);


    return <div className={"share_component"}>


        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className={"share_box"}>

            <div className={"close_button_area"}>
                <div className="icon" onClick={(): void => {
                    props.setShowShare(false);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </div>

            </div>


            <div className={"share_box_content"}>
                <h1 className={"share_title"}>Share it with your friends.</h1>


                <div className={"share_icons_area"}>
                    <WhatsappShareButton url={window.location.href}>
                        <WhatsappIcon round size={40} />
                    </WhatsappShareButton>

                    <LinkedinShareButton url={window.location.href}>
                        <LinkedinIcon round size={40} />
                    </LinkedinShareButton>

                    <InstapaperShareButton url={window.location.href}>
                        <InstapaperIcon round size={40} />
                    </InstapaperShareButton>

                    <TwitterShareButton url={window.location.href}>
                        <TwitterIcon round size={40} />
                    </TwitterShareButton>

                    <FacebookShareButton url={window.location.href}>
                        <FacebookIcon round size={40} />
                    </FacebookShareButton>

                    <EmailShareButton url={window.location.href}>
                        <EmailIcon round size={40} />
                    </EmailShareButton>

                    <TelegramShareButton url={window.location.href}>
                        <TelegramIcon round size={40} />
                    </TelegramShareButton>


                    <RedditShareButton url={window.location.href}>
                        <RedditIcon round size={40} />
                    </RedditShareButton>

                    <PinterestShareButton media={window.location.href} url={window.location.href}>
                        <PinterestIcon round size={40} />
                    </PinterestShareButton>

                    <VKShareButton url={window.location.href}>
                        <VKIcon round size={40} />
                    </VKShareButton>

                    <OKShareButton url={window.location.href}>
                        <OKIcon round size={40} />
                    </OKShareButton>

                    <TumblrShareButton url={window.location.href}>
                        <TumblrIcon round size={40} />
                    </TumblrShareButton>
                </div>


                <div className={"url_area"}>

                    <div className={"url_text"}>
                        {window.location.href}
                    </div>

                    <button onClick={(): void => {
                        navigator.clipboard.writeText(window.location.href);

                        props.setShowShare(false);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                        Copy
                    </button>

                </div>
            </div>


        </motion.div>

    </div>;
}

export default ShareComponent;