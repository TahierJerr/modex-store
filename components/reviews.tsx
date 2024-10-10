import ReviewCard from "./ui/review-card";

interface reviewProps {
    className?: string;
}

const Reviews: React.FC<reviewProps> = ({ className }) => {
    
    const reviews = [
    {
        name: "Marvin",
        review: "Super good experience, Top service! Very considerate, helpful and friendly!",
        customProductPurchased: "Custom Gaming PC",
        stars: 5
    },
    {
        name: "P. W",
        review: "I bought a refurbished graphics card from Modex for a good price, received in very good condition! Very happy with it, the support is also very nice!",
        customProductPurchased: "Custom Gaming PC",
        stars: 5
    },
    {
        name: "Luuk Battjes",
        review: "Good PC, no problems with it and great performance.",
        customProductPurchased: "Custom Gaming PC",
        stars: 5
    }
    ];
    
    
    
    return (
    <div className={`${className} flex flex-col`}>
        <ReviewCard className="" name={reviews[0].name} review={reviews[0].review} stars={reviews[0].stars} />
        <ReviewCard className="" name={reviews[2].name} review={reviews[2].review} stars={reviews[2].stars} />
        <ReviewCard className="" name={reviews[1].name} review={reviews[1].review} stars={reviews[1].stars} />
    </div>
    )
}

export default Reviews