import banner_2 from "../../../assets/images/banner-2.png";
import Countdown from "./Countdown";
import { motion } from "framer-motion";

const DiscountSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-pink-50 to-pink-200 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <div className="relative">
            <img
              className="max-w-full rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500"
              src={banner_2}
              alt="product-img"
            />
            {/* Decorative shapes */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-pink-300 rounded-full opacity-40 animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-400 rounded-full opacity-30 animate-pulse-slow"></div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { staggerChildren: 0.2, duration: 0.6 },
            },
          }}
          className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4"
        >
          <motion.h1
            variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
            className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight"
          >
            30% Discount On All Items
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
            className="text-gray-700 text-md md:text-lg"
          >
            Limited time offer! Grab your favorite items before its too late.
          </motion.p>

          {/* Countdown */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
            className="flex justify-center md:justify-start gap-3 md:gap-4 mt-2"
          >
            <Countdown />
          </motion.div>

          {/* Call to Action Button */}
          <motion.button
            variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
            className="mt-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-2.5 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95"
          >
            Shop Collection
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default DiscountSection;
