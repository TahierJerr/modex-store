"use client";

import { useState, useEffect } from "react"

const Promotion = () => {

    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowText((prevShowText) => !prevShowText);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

  return (
    <div className="bg-primary flex items-center justify-center text-black font-semibold text-xs sm:text-sm">
        <p className="px-4 py-2">We zijn nu ook beschikbaar in België met gratis verzending!</p>
            </div>
  )
}

export default Promotion