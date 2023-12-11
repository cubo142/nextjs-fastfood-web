'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const AdsCarousel = () => {

    const responsiveImgStyles = {
        width: "100%",
        height: "auto",
    }

    return (
        <div>
            <Swiper

                style={{ borderRadius: "15px", width: "100%",zIndex:"0",position:"relative" }}
                autoHeight={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img style={responsiveImgStyles} src="https://marketplace.canva.com/EAFooCj7wG0/1/0/1600w/canva-yellow-creative-noodle-food-promotion-banner-XX4iOsvHO1o.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={responsiveImgStyles} src="https://marketplace.canva.com/EAFooCj7wG0/1/0/1600w/canva-yellow-creative-noodle-food-promotion-banner-XX4iOsvHO1o.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default AdsCarousel