"use client";

import { useState } from "react";

const Promotion = () => {
    const [isHidden, setIsHidden] = useState(false);

    const currentDate = new Date();
    const promoEndDate = new Date("2024-03-11");

    if (currentDate >= promoEndDate) {
        setIsHidden(true);
    }

    return (
        <div className={`bg-primary flex items-center justify-center text-black font-semibold text-xs sm:text-sm ${isHidden ? "hidden" : ""}`}>
            <p className="px-4 py-2">We zijn nu ook beschikbaar in België met gratis verzending!</p>
        </div>
    );
};

export default Promotion;
