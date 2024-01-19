import React from 'react';

const LoadingNow = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-bold text-primary animate-pulse mr-2">Loading...</p>
            <span className="inline-block w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin"></span>
        </div>
    );
};

export default LoadingNow;