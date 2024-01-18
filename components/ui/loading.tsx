import React, { useEffect, useState } from 'react';

interface LoadingProps {
    description: string;
    isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ description, isLoading }) => {
    const [showLoading, setShowLoading] = useState(isLoading);

    useEffect(() => {
        setShowLoading(isLoading);
    }, [isLoading]);

    return (
        <div className="flex items-center justify-center h-screen">
            {showLoading && (
                <div className="text-center">
                    <svg className="animate-spin h-10 w-10 mx-auto mb-4 text-gray-500" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12c0-3.042-1.135-5.824-3-7.938l-3 2.647A7.962 7.962 0 0120 12h4a8 8 0 01-8 8v-4z"
                        />
                    </svg>
                    <p className="text-gray-500">{description}</p>
                </div>
            )}
        </div>
    );
};

export default Loading;
