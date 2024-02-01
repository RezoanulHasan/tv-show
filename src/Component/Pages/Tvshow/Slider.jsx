// Slider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "./Slider.css";

const Slider = ({ shows }) => {
  console.log("Shows in Slider:", shows);

  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {shows &&
          shows.map((show) => (
            <SwiperSlide key={show.id}>
              <img src={show.image && show.image.medium} alt={show.name} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Slider;
