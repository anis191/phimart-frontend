// import { FaShoppingCart } from "react-icons/fa";
// import { HiBadgeCheck } from "react-icons/hi";
// import { MdLocalOffer } from "react-icons/md";
// import { RiSecurePaymentFill } from "react-icons/ri";
// import { motion } from "framer-motion";

// const Features = () => {
//     const features = [
//         {
//             icon: <FaShoppingCart className="text-yellow-400 text-4xl" />,
//             title: "Free Delivery",
//             description: "Enjoy fast and hassle-free delivery at no extra cost. We bring your order right to your doorstep—absolutely free!",
//             gradient: "bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-50",
//         },
//         {
//             icon: <HiBadgeCheck className="text-red-600 text-4xl" />,
//             title: "Quality Guarantee",
//             description: "We stand by the excellence of every product we offer. Your satisfaction is assured with our trusted quality commitment.",
//             gradient: "bg-gradient-to-br from-red-100 via-red-200 to-red-50",
//         },
//         {
//             icon: <MdLocalOffer className="text-indigo-500 text-4xl" />,
//             title: "Daily Offers",
//             description: "Unlock exciting new deals every day! Save more with fresh discounts and special promotions updated daily.",
//             gradient: "bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-50",
//         },
//         {
//             icon: <RiSecurePaymentFill className="text-green-600 text-4xl" />,
//             title: "Secure Payment",
//             description: "Shop with confidence using our encrypted and trusted payment system. Your personal and financial information is always protected.",
//             gradient: "bg-gradient-to-br from-green-100 via-green-200 to-green-50",
//         }
//     ];

//     const cardVariants = {
//         hidden: { opacity: 0, y: 40, scale: 0.95 },
//         visible: { opacity: 1, y: 0, scale: 1 },
//     };

//     return (
//         <section className="px-6 md:px-16 py-12 bg-gray-50">
//             <div className="max-w-7xl mx-auto text-center mb-10">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us</h2>
//                 <p className="text-gray-600 mt-2 text-lg">Experience premium services tailored to give you convenience, quality, and peace of mind.</p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {features.map((item, idx) => (
//                     <motion.div
//                         key={idx}
//                         className={`group p-5 rounded-xl shadow-xl flex flex-col items-center text-center min-h-[200px] ${item.gradient} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.3 }}
//                         transition={{ duration: 0.6, delay: idx * 0.15 }}
//                         variants={cardVariants}
//                     >
//                         <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
//                             {item.icon}
//                         </div>
//                         <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
//                         <p className="text-gray-700 text-sm">{item.description}</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Features;
import { FaShoppingCart } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import { MdLocalOffer } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Features = () => {
    const features = [
        {
            icon: <FaShoppingCart className="text-yellow-400 text-3xl" />,
            title: "Free Delivery",
            description: "Fast, hassle-free delivery at no extra cost.",
            gradient: "bg-gradient-to-br from-yellow-50 via-yellow-100 to-white",
        },
        {
            icon: <HiBadgeCheck className="text-red-600 text-3xl" />,
            title: "Quality Guarantee",
            description: "Trusted quality with every product we offer.",
            gradient: "bg-gradient-to-br from-red-50 via-red-100 to-white",
        },
        {
            icon: <MdLocalOffer className="text-indigo-500 text-3xl" />,
            title: "Daily Offers",
            description: "Save more with new deals and discounts daily.",
            gradient: "bg-gradient-to-br from-indigo-50 via-indigo-100 to-white",
        },
        {
            icon: <RiSecurePaymentFill className="text-green-600 text-3xl" />,
            title: "Secure Payment",
            description: "Encrypted, safe, and reliable transactions.",
            gradient: "bg-gradient-to-br from-green-50 via-green-100 to-white",
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <section className="px-4 md:px-12 py-8 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center mb-6">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900">Why Choose Us</h2>
                <p className="text-gray-600 mt-1 text-sm md:text-base">
                    Premium services designed for your convenience & peace of mind.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {features.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className={`group p-4 rounded-lg shadow-md flex flex-col items-center text-center min-h-[150px] ${item.gradient} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        variants={cardVariants}
                    >
                        <div className="mb-2 transition-transform duration-300 group-hover:scale-110">
                            {item.icon}
                        </div>
                        <h3 className="text-md font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
