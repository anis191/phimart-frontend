import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import storyteller from "../../../assets/images/storyteller-book.png";
import shirt from "../../../assets/images/shirt-1.png";
import laptop from "../../../assets/images/laptop-2.png";
import anxiety from "../../../assets/images/ultimate-anxiety-free.jpg";
import CarouselSlide from './CarouselSlide';


const HeroCarousel = () => {
  const slides = [
    {
      title: "Stories That Stir the Soul—A Journey Through Jodi Picoult's Worlds.Stories That Stir the Soul—A Journey Through Jodi Picoult's Worlds",
      subtitle: "Heartfelt fiction that challenges, heals, and inspires",
      image: storyteller,
      bgGradient: "linear-gradient(135deg, #ffd6e0, #ffcce5, #ffe6f0, #ffd6e0)",
    },
    {
      title: "Confidence in Every Stitch—Look Sharp, Feel Sharper.Stories That Stir the Soul—A Journey Through Jodi Picoult's Worlds",
      subtitle: "Tailored comfort that moves with your day",
      image: shirt,
      bgGradient: "linear-gradient(135deg, #d0f0ea, #a0e0f0, #b0f0f5, #d0f0ea)",
    },
    {
      title: "Power Meets Portability—Experience Performance on the Go",
      subtitle: "Slim, stylish, and built to handle your everyday hustle.Stories That Stir the Soul—A Journey Through Jodi Picoult's Worlds",
      image: laptop,
      bgGradient: "linear-gradient(135deg, #fff2cc, #ffe699, #fff5cc, #fff2cc)",
    },
    {
      title: "The Ultimate Anxiety-Free Life—Your Path to Inner Peace Starts Here",
      subtitle: "Proven techniques to calm your mind and regain control.Stories That Stir the Soul—A Journey Through Jodi Picoult's WorldsStories That Stir the Soul—A Journey Through Jodi Picoult's Worlds",
      image: anxiety,
      bgGradient: "linear-gradient(135deg, #e0d4f7, #d0c0f0, #f0e0fa, #e0d4f7)",
    },
  ];


  return (
    <Swiper
      effect="fade"
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      className="mySwiper"
      loop={true}
      speed={1000}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <CarouselSlide
            title={slide.title}
            subtitle={slide.subtitle}
            image={slide.image}
            bgGradient={slide.bgGradient}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


export default HeroCarousel;