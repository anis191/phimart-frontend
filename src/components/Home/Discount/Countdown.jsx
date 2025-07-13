// import React from 'react';

import { useEffect, useState } from "react";

const Countdown = () => {
    // time countdown logic
    const targetDate = new Date().getTime() + (1000 * 60 * 60 * 24 * 25)
    const getTimeremaining = () =>{
        const now = new Date().getTime()
        const difference = targetDate - now
        return{
            days: Math.floor(difference / (1000 * 60 * 60 *24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference /(1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        }
    }
    const [timeLeft, setTimeLeft] = useState(getTimeremaining())
    
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTimeLeft(getTimeremaining())
        }, 1000)
        
        return () => clearInterval(timer)
    },[])

    return (
        <div className="flex justify-center md:justify-start space-x-6 text-2xl my-5">
            <div>
                <span className="text-pink-500 font-bold">{timeLeft.days}</span><br/>
                <span className="font-semibold">Days</span>
            </div>
            <div>
                <span className="text-pink-500 font-bold">{timeLeft.hours}</span><br/>
                <span className="font-semibold">Hrs</span>
            </div>
            <div>
                <span className="text-pink-500 font-bold">{timeLeft.minutes}</span><br/>
                <span className="font-semibold">Min</span>
            </div>
            <div>
                <span className="text-pink-500 font-bold">{timeLeft.seconds}</span><br/>
                <span className="font-semibold">Sec</span>
            </div>
        </div>
    );
};

export default Countdown;