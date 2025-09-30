import banner from "../../../assets/images/banner.png";

const CarouselSlide = ({ title, subtitle, image }) => {
  return (
    <section
      className="w-full flex justify-center items-center px-4 md:px-8 py-0 transition-all duration-1000 bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full mx-auto px-2 md:px-4 bg-white/40 p-4 rounded-lg">
        
        {/* Left content */}
        <div className="w-full md:w-1/2 space-y-3 px-3 text-center md:text-left">
          <h1 
            className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h1>

          <p 
            className="text-gray-700 text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {subtitle}
          </p>

          <button 
            className="btn btn-secondary px-5 py-2.5 rounded-full shadow-xl mt-1 md:mt-4 hover:scale-105 transition-transform"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Shop Product
          </button>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            className="w-full max-h-[220px] sm:max-h-[280px] md:max-h-[400px] object-contain drop-shadow-lg animate-slideUp"
            src={image}
            alt="product-img"
          />
        </div>
      </div>

      <style>{`
        .animate-slideUp {
          animation: slideUp 1s ease forwards;
        }
        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default CarouselSlide;
