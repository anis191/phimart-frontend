import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Countdown = () => {
  const targetDate = new Date().getTime() + 1000 * 60 * 60 * 24 * 25;

  const getTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderUnit = (value, label) => (
    <motion.div
      key={label}
      className="flex flex-col items-center bg-white rounded-full w-20 h-20 md:w-24 md:h-24 shadow-lg justify-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="text-pink-500 font-bold text-lg md:text-xl"
      >
        {value.toString().padStart(2, "0")}
      </motion.span>
      <span className="text-gray-700 text-xs md:text-sm font-semibold">{label}</span>
    </motion.div>
  );

  return (
    <div className="flex gap-4 md:gap-6">
      <AnimatePresence>
        {renderUnit(timeLeft.days, "Days")}
        {renderUnit(timeLeft.hours, "Hrs")}
        {renderUnit(timeLeft.minutes, "Min")}
        {renderUnit(timeLeft.seconds, "Sec")}
      </AnimatePresence>
    </div>
  );
};

export default Countdown;


// // import React from 'react';

// import { useEffect, useState } from "react";

// const Countdown = () => {
//     // time countdown logic
//     const targetDate = new Date().getTime() + (1000 * 60 * 60 * 24 * 25)
//     const getTimeremaining = () =>{
//         const now = new Date().getTime()
//         const difference = targetDate - now
//         return{
//             days: Math.floor(difference / (1000 * 60 * 60 *24)),
//             hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//             minutes: Math.floor((difference /(1000 * 60)) % 60),
//             seconds: Math.floor((difference / 1000) % 60)
//         }
//     }
//     const [timeLeft, setTimeLeft] = useState(getTimeremaining())
    
//     useEffect(()=>{
//         const timer = setInterval(()=>{
//             setTimeLeft(getTimeremaining())
//         }, 1000)
        
//         return () => clearInterval(timer)
//     },[])

//     return (
//         <div className="flex justify-center md:justify-start space-x-6 text-2xl my-5">
//             <div>
//                 <span className="text-pink-500 font-bold">{timeLeft.days}</span><br/>
//                 <span className="font-semibold">Days</span>
//             </div>
//             <div>
//                 <span className="text-pink-500 font-bold">{timeLeft.hours}</span><br/>
//                 <span className="font-semibold">Hrs</span>
//             </div>
//             <div>
//                 <span className="text-pink-500 font-bold">{timeLeft.minutes}</span><br/>
//                 <span className="font-semibold">Min</span>
//             </div>
//             <div>
//                 <span className="text-pink-500 font-bold">{timeLeft.seconds}</span><br/>
//                 <span className="font-semibold">Sec</span>
//             </div>
//         </div>
//     );
// };

// export default Countdown;