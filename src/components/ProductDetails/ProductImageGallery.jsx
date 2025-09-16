// ProductImageGallery.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import { useState } from "react";
import defaultImage from "../../assets/images/default-image.png";

const ProductImageGallery = ({ images, productName }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const displayImages = images.length > 0 ? images : [{ image: defaultImage }];
  
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="relative mb-2 rounded-lg overflow-hidden">
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="product-main-slider rounded-lg"
        >
          {displayImages.map((imageObj, idx) => (
            <SwiperSlide key={idx}>
              <div className="aspect-square bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                <img
                  src={imageObj.image}
                  alt={`${productName} - View ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Image counter */}
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs py-0.5 px-1.5 rounded-full z-10">
          {activeIndex + 1} / {displayImages.length}
        </div>
      </div>
      
      {/* Thumbnail slider */}
      {displayImages.length > 1 && (
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={8}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="product-thumb-slider mt-1"
        >
          {displayImages.map((imageObj, idx) => (
            <SwiperSlide key={idx} className="cursor-pointer">
              <div className={`aspect-square bg-gray-100 rounded overflow-hidden border transition-all ${
                activeIndex === idx ? "border-indigo-500" : "border-transparent"
              }`}>
                <img
                  src={imageObj.image}
                  alt={`${productName} - Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ProductImageGallery;