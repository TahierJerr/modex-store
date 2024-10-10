"use client";

import { useEffect, useRef, useCallback } from "react";
import Container from "./ui/container";
import Image from "next/image";



const BuiltByComponent = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const SCROLL_SPEED = 1; // Adjust scroll speed here
const BRANDS_IMAGES = [
    "/brands/AMD.webp",
    "/brands/ASUS.webp",
    "/brands/CORSAIR.webp",
    "/brands/KINGSTON.webp",
    "/brands/MSI.webp",
    "/brands/NVIDIA.webp",
    "/brands/NZXT.webp",
    "/brands/LEXAR.webp",
];

// Helper function to duplicate the images for continuous looping
const getRandomizedImages = (images: any, times = 5) => {
    return Array.from({ length: times }, () => images).flat();
};
    
    const animateScroll = useCallback(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
            carousel.scrollLeft = 0; // Reset to start
        } else {
            carousel.scrollLeft += SCROLL_SPEED; // Scroll to the right
        }

        requestAnimationFrame(animateScroll);
    }, []);
    
    useEffect(() => {
        const animationId = requestAnimationFrame(animateScroll);
        
        return () => cancelAnimationFrame(animationId); // Clean up on unmount
    }, [animateScroll]);

    const randomizedImages = getRandomizedImages(BRANDS_IMAGES);

    return (
        <section className="w-full bg-muted py-8">
            <Container>
                <div className="w-full overflow-hidden bg-gray-100 py-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
                        Trusted Brands We Build With
                    </h2>
                    <div
                        ref={carouselRef}
                        className="flex items-center overflow-x-hidden space-x-16"
                    >
                        {randomizedImages.map((src, index) => (
                            <div key={index} className="flex-none">
                                <Image
                                    draggable={false}
                                    loading="lazy"
                                    src={src}
                                    alt={`Brand ${index + 1}`}
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BuiltByComponent;
