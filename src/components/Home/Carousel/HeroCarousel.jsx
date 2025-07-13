// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import storyteller from "../../../assets/images/storyteller-book.png"
import shirt from "../../../assets/images/shirt-1.png"
import laptop from "../../../assets/images/laptop-2.png"
import anxiety from "../../../assets/images/ultimate-anxiety-free.jpg"
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselSlide from './CarouselSlide';

const HeroCarousel = () => {
    const slides = [
        {
            title : "Stories That Stir the Soul—A Journey Through Jodi Picoult's Worlds",
            subtitle : "Heartfelt fiction that challenges, heals, and inspires",
            image : storyteller,
        },
        {
            title : "Confidence in Every Stitch—Look Sharp, Feel Sharper",
            subtitle : "Tailored comfort that moves with your day",
            image : shirt,
        },
        {
            title : "Power Meets Portability—Experience Performance on the Go",
            subtitle : "Slim, stylish, and built to handle your everyday hustle",
            image : laptop,
        },
        {
            title : "The Ultimate Anxiety-Free Life—Your Path to Inner Peace Starts Here",
            subtitle : "Proven techniques to calm your mind and regain control",
            image : anxiety,
        },
    ]
  return (
    <>
      <Swiper
        // spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
                <CarouselSlide title={slide.title} subtitle={slide.subtitle} image={slide.image} />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HeroCarousel;