const CarouselSlide = ({ title, subtitle, image, bgGradient }) => {
  return (
    <section
      className="w-full h-[400px] md:h-[450px] flex justify-center items-center px-4 md:px-8 transition-all duration-1000"
      style={{
        background: bgGradient,
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full mx-auto px-2 md:px-4">
        {/* left content */}
        <div className="w-full md:w-1/2 space-y-3 px-3 text-center md:text-left">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-700 text-sm md:text-base">{subtitle}</p>
          <button className="btn btn-secondary px-5 py-2.5 rounded-full shadow-xl mt-2 md:mt-4 hover:scale-105 transition-transform">
            Shop Product
          </button>
        </div>

        {/* right image */}
        <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
          <img
            className="max-w-[120px] md:max-w-[250px] drop-shadow-lg animate-slideUp"
            src={image}
            alt="product-img"
          />
        </div>
      </div>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
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