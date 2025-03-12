import { FC, JSX, MutableRefObject, useRef } from "react";

// @ts-ignore
import 'swiper/scss';
// @ts-ignore
import 'swiper/scss/navigation';

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useGetManyArtworks from "../../../hooks/service/useGetManyArtworks.tsx";
import { IArtwork } from "../../../types/data/data_types_2.ts";

import ExploreForHomeCard from "./ExploreForHomeCard.tsx";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { loading_2 } from "../../../utils/assets.tsx";


const ExploreForHome: FC = (): JSX.Element => {


    const navigate: NavigateFunction = useNavigate();
    const swiper_ref: MutableRefObject<SwiperRef | null> = useRef<SwiperRef | null>(null)
    const { data, isLoading, isError } = useGetManyArtworks();


    if (isLoading) return <div style={{
        width: "100%",
        padding: "1rem 5%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <img loading="lazy" title="loading" src={loading_2} alt={"loading"} width={"18px"} height={"auto"} />
    </div>

    if (isError) return <h1>error</h1>

    const slides: JSX.Element[] = data!.map((el: IArtwork): JSX.Element => <SwiperSlide
        key={el.data.id}>
        <ExploreForHomeCard data={el!} />
    </SwiperSlide>);


    return <div className={"explore_for_home"}>
        <div className={"explore_for_home_title"}>
            <p className="explore_title">Discover featured artworks</p>
            <p className="explore_desc">To view more artworks, go to the <span onClick={(): void => {
                navigate("/explore");
            }}>Explore</span> page.</p>
        </div>

        <div className={"swiper_wrapper"}>

            <Swiper
                ref={swiper_ref}
                modules={[Navigation]}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                loop
                grabCursor
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },

                    908: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },

                    1300: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },

                }}
            >
                {slides}
            </Swiper>


            <div className={"swiper_nav_buttons"}>
                <div className={"swiper_icon_wrapper"} onClick={(): void => {
                    swiper_ref.current?.swiper.slidePrev();

                }}>
                    <div className="swiper_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg>
                    </div>
                </div>

                <div className={"swiper_icon_wrapper"} onClick={(): void => {
                    swiper_ref.current?.swiper.slideNext();

                }}>
                    <div className="swiper_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                    </div>

                </div>

            </div>

        </div>
    </div>
}

export default ExploreForHome;