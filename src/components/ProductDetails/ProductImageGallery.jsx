import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import defaultImage from "../../assets/images/default-image.png"

const ProductImageGallery = ({images, productName}) => {
    const [thumbsSwiper] = useState(null);
    const displayImages = images.length > 0 ? images : [{image : defaultImage}]
    return (
        <div className="rounded-lg border overflow-hidden">
            <Swiper modules={[Navigation, Thumbs]} navigation thumbs={{
                swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
            }} className="product-main-slider">
                {displayImages.map((imageObj, idx)=>(
                    <SwiperSlide key={idx}>
                        <div className="aspect-square bg-base-100">
                            <img src={imageObj.image} alt={productName} className="h-full w-full object-center"/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductImageGallery;