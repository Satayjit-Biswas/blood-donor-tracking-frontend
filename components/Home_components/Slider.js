import React from 'react';
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Home_style from "../../styles/Home.module.css";


const Slider = () => {
    return (
        <div>
            <div className={`${Home_style.slider_area_gap}`}>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView="auto"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            575: {
                                slidesPerView: 1,
                            },
                            992: {
                                slidesPerView: 1,
                            },
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide>
                            <div className={`${Home_style.slider_area}`}>
                                <div>
                                    
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
        </div>
    );
};

export default Slider;