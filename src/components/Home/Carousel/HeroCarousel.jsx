import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import Laptop1 from "../../../assets/images/CarouselImages/Laptop1.png";
import tShart1 from "../../../assets/images/CarouselImages/tShart1.png";
import wirelessheadphones from "../../../assets/images/CarouselImages/wirelessheadphones.png";
import StoryReadingCollection2 from "../../../assets/images/CarouselImages/StoryReadingCollection2.jpg";
import CarouselSlide from './CarouselSlide';


const HeroCarousel = () => {
  const slides = [
  {
    title: "Wireless Noise-Cancelling Headphones for Crystal-Clear",
    subtitle: "Immerse yourself in premium audio with up to 30 hours of uninterrupted battery life",
    image: wirelessheadphones
  },
  {
    title: "Premium Comfort T-Shirt - Style Meets Everyday Comfort",
    subtitle: "Soft, breathable fabric designed to keep you stylish and comfortable all day long",
    image: tShart1
  },
  {
    title: "Ultra-Slim Business Laptop for On-the-Go Productivity",
    subtitle: "High-performance laptop with sleek design, perfect for work, travel, and multitasking",
    image: Laptop1
  },
  {
    title: "Self-Improvement Story Book - Unlock Your Best Self",
    subtitle: "Proven techniques and inspiring stories to calm your mind, boost confidence transform your life",
    image: StoryReadingCollection2
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