import {FC, JSX, MutableRefObject, useRef} from "react";

// @ts-ignore
import 'swiper/scss';
// @ts-ignore
import 'swiper/scss/navigation';

import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import useGetManyArtworks from "../../../hooks/service/useGetManyArtworks.tsx";
import {IArtwork} from "../../../types/data/data_types_2.ts";

import {MdArrowBackIosNew} from "react-icons/md";
import {MdArrowForwardIos} from "react-icons/md";
import ExploreForHomeCard from "./ExploreForHomeCard.tsx";


const ExploreForHome: FC = (): JSX.Element => {

    const swiper_ref: MutableRefObject<SwiperRef | null> = useRef<SwiperRef | null>(null)
    const {data, isLoading, isError} = useGetManyArtworks();


    if (isLoading) return <h1>loading...</h1>

    if (isError) return <h1>error</h1>

    const slides: JSX.Element[] = data!.map((el: IArtwork): JSX.Element => <SwiperSlide
        key={el.data.id}>
        <ExploreForHomeCard data={el!}/>
    </SwiperSlide>);


    return <div className={"swiper_wrapper"}>

        <Swiper
            ref={swiper_ref}
            modules={[Navigation]}
            navigation={{nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}}
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
                <MdArrowBackIosNew className={"swiper_icon"}/>
            </div>

            <div className={"swiper_icon_wrapper"} onClick={(): void => {
                swiper_ref.current?.swiper.slideNext();

            }}>
                <MdArrowForwardIos className={"swiper_icon"}/>
            </div>

        </div>

    </div>
}

export default ExploreForHome;