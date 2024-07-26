import ReviewCard from "./ui/review-card";

const Reviews = () => {

    const reviews = [
        {
            imageUrl: "https://example.com/image1.jpg",
            name: "Marvin",
            reviewFrom: "Google",
            reviewUrl: "https://g.co/kgs/2Lvw85P",
            title: "Great Product",
            review: "Super good experience, Top service! Very considerate, helpful and friendly!",
            customProductPurchased: "Custom Gaming PC",
            published: "1 year ago",
            stars: 5
        },
        {
            imageUrl: "https://example.com/image2.jpg",
            name: "Jane Smith",
            reviewFrom: "Modex",
            reviewUrl: "https://example.com/review2",
            title: "Excellent Service",
            review: "The customer service was top-notch and the product arrived on time. Very satisfied!",
            customProductPurchased: "Custom Gaming PC",
            published: "1 year ago",
            stars: 4
        },
        {
            imageUrl: "https://example.com/image3.jpg",
            name: "David Johnson",
            reviewFrom: "Facebook",
            reviewUrl: "https://example.com/review3",
            title: "Impressive Quality",
            review: "I've been using this computer for a month now and it's been performing flawlessly. Impressed with the build quality!",
            customProductPurchased: "Custom Gaming PC",
            published: "1 year ago",
            stars: 4
        }
    ];

return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-10 md:mb-16">
                            <h2 className="text-2xl font-bold md:text-3xl">Modex Reviews</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {reviews.map((review, index) => (
                                    <ReviewCard key={index} customProductPurchased={review.customProductPurchased} title={review.title} published={review.published} name={review.name} reviewFrom={review.reviewFrom} reviewUrl={review.reviewUrl} review={review.review} stars={review.stars} />
                            ))}
                    </div>
            </div>
    </section>
)
}

export default Reviews