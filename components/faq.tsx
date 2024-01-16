"use client";

import { useState } from "react";
import { Answers } from "@/types";

interface FaqProps {
   data: Answers[];
}

const Faq: React.FC<FaqProps> = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
 
    const handleClick = (index: number) => {
        setActiveIndex(index === activeIndex ? 0 : index);
    };
 
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-32 md:mt-0">
        <h1 className="font-bold text-3xl mb-8 md:text-left text-center">Veelgestelde vragen</h1>
            {data.map((item, index) => (
                <div key={index} className="mb-4 border border-primary rounded-md group sm:hover:bg-black200" onClick={() => handleClick(index)}>
                   <div className="font-medium text-lg px-4 py-3 flex text-gray-800 flex-row mt-2 cursor-pointer text-whiterounded-lg" >
                       <div className="flex-auto">
                           {item.question}
                       </div>
                       <div className="px-2 ">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`h-6 w-6 ${activeIndex === index ? 'transform rotate-180' : ''}`}>
                              <polyline points="6 9 12 15 18 9"></polyline>
                           </svg>
                       </div>
                   </div>
                   {activeIndex === index && (
                       <div className="p-4 text-left text-white mb-5 rounded-lg cursor-pointer">
                           {item.answers}
                       </div>
                   )}
                </div>
            ))}
        </div>
    );
 };
 
 export default Faq;