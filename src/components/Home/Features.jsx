// import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import { MdLocalOffer } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";

const Features = () => {
    const feature = [
        {
            icon : <FaShoppingCart className="text-red-400 text-4xl"/>,
            title : "Free Delivery",
            description : "Enjoy fast and hassle-free delivery at no extra cost. We bring your order right to your doorstep—absolutely free!",
        },
        {
            icon : <HiBadgeCheck className="text-red-400 text-4xl"/>,
            title : "Quality Guarantee",
            description : "We stand by the excellence of every product we offer. Your satisfaction is assured with our trusted quality commitment.",
        },
        {
            icon : <MdLocalOffer className="text-red-400 text-4xl"/>,
            title : "Daily Offers",
            description : "Unlock exciting new deals every day! Save more with fresh discounts and special promotions updated daily.",
        },
        {
            icon : <RiSecurePaymentFill className="text-red-400 text-4xl"/>,
            title : "Secure Payment",
            description : "Shop with confidence using our encrypted and trusted payment system. Your personal and financial information is always protected.",
        }
    ]

    return (
        <div>
            <section className="px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* <div className="flex flex-col items-center text-center"> */}
                        {feature.map((item,idx)=>(
                            <div key={idx} className="flex flex-col items-center text-center">
                                {item.icon}
                                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                        ))}
                </div>
            </section>
        </div>
    );
};

export default Features;