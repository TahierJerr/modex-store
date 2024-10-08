import ReviewCard from "./ui/review-card";

const Reviews = () => {

    const reviews = [
        {
            imageUrl: "https://example.com/image1.jpg",
            name: "Marvin",
            reviewFrom: "Google",
            reviewUrl: "https://maps.app.goo.gl/6H1ywwvSYXDikd4c8",
            title: "Great Product",
            review: "Super good experience, Top service! Very considerate, helpful and friendly!",
            customProductPurchased: "Custom Gaming PC",
            published: "1 year ago",
            stars: 5
        },
        {
            imageUrl: "https://example.com/image2.jpg",
            name: "P. W",
            reviewFrom: "Google",
            reviewUrl: "https://maps.app.goo.gl/ttD9ja5nCiS7LGnL8",
            title: "Excellent Service",
            review: "I bought a refurbished graphics card from Modex for a good price, received in very good condition! Very happy with it, the support is also very nice!",
            customProductPurchased: "Custom Gaming PC",
            published: "1 year ago",
            stars: 5
        },
        {
            imageUrl: "https://example.com/image3.jpg",
            name: "Luuk Battjes",
            reviewFrom: "Trustpilot",
            reviewUrl: "https://www.trustpilot.com/reviews/66f5690195705b27c8ae7339",
            title: "PC Purschased",
            review: "Good PC, no problems with it and great performance.",
            customProductPurchased: "Custom Gaming PC",
            published: "26-09-2024",
            stars: 5
        }
    ];

    const avatarsFallback = reviews.map((review) => review.name.charAt(0));

return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-10 md:mb-16">
                            <h2 className="text-2xl font-bold md:text-3xl">MODEX Reviews</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {reviews.map((review, index) => (
                                    <ReviewCard avatarFallback={avatarsFallback[index]} key={index} customProductPurchased={review.customProductPurchased} title={review.title} published={review.published} name={review.name} reviewFrom={review.reviewFrom} reviewUrl={review.reviewUrl} review={review.review} stars={review.stars} />
                            ))}
                    </div>
            </div>
    </section>
)
}

export default Reviews