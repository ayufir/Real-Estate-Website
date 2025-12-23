import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function PropertySlider({ images }) {
  return (
    <Swiper loop>
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img} className="rounded-xl" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
