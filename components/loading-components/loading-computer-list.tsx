import LoadingCard from "./loading-card";


interface LoadingProductListProps {
    loadingCards?: number;
    title?: string;
    description?: string;
    className?: string;
}

const LoadingProductList: React.FC<LoadingProductListProps> = async ({
    loadingCards = 12,
    title,
    description,
    className,
}) => {
    const renderLoadingCards = () => {
        const cards = [];
        const itemCount = loadingCards ? loadingCards : 12;
        for (let i = 0; i < itemCount; i++) {
            cards.push(<LoadingCard key={i} />);
        }
        return cards;
    };

    return (
        <div className="space-y-4 mx-2">
            <p className="text-white font-bold text-3xl mx-auto">{title}</p>
            <p className=" text-gray text-1xl mx-auto font-semibold ">{description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4 gap-4 text-white">
                {renderLoadingCards()}
            </div>
        </div>
    );
};

export default LoadingProductList;
