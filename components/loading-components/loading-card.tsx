const LoadingCard = () => {
    return (
        <div className="bg-gray-300 rounded-lg shadow-md text-black flex-col flex bg-black200">
            <div className="w-full min-h-80 aspect-square bg-black100 animate-pulse rounded-md"></div>
            <div className="p-4 flex flex-col">
                <p className="bg-black100 h-6 w-64 animate-pulse rounded-xl"></p>
                <p className="bg-black100 h-4 w-20 animate-pulse mt-2 rounded-xl mb-2"></p>
                <hr className="mt-2 text-black100" />
                <div className="mt-2 mb-1">
                    <p className="bg-black100 h-4 w-32 animate-pulse mt-2 rounded-xl"></p>
                    <p className="bg-black100 h-4 w-56 animate-pulse mt-2 rounded-xl"></p>
                    <p className="bg-black100 h-4 w-64 animate-pulse mt-2 rounded-xl"></p>
                </div>
                <hr className="mt-2 text-black100" />
                <div className="flex items-center mt-4">
                    <div className="flex items-center w-full  justify-center mr-4 rounded-lg h-10 bg-black100 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingCard;
