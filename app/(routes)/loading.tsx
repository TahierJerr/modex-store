"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loading() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black">
            {showContent ? (
                <div className="max-w-screen-sm max-h-screen-sm text-center">
                    <Image
                        src="/path/to/loading-logo.png"
                        alt="Loading Logo"
                        width={300}
                        height={300}
                        quality={100}
                        className="mx-auto"
                        priority={true}
                        fetchPriority="high"
                    />
                    <p className="text-primary font-semibold">
                        Loading<span className="loading-dot">...</span>
                    </p>
                </div>
            ) : null}
        </div>
    );
}