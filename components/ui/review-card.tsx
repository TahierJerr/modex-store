import { Link, StarIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Computer } from "@/types";

interface ReviewCardProps {
    imageUrl?: string;
    name: string;
    reviewFrom: string;
    reviewUrl: string;
    title: string;
    review: string;
    productPurchased?: Computer;
    customProductPurchased?: string;
    published: string;
    stars: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ imageUrl, name, reviewFrom, reviewUrl, title, review, productPurchased, customProductPurchased, stars, published }) => {

    const handleStars = (stars: number) => {
        let starsArray = [];
        for (let i = 0; i < stars; i++) {
            starsArray.push(<StarIcon className="h-5 w-5 fill-primary" key={i} />);
        }
        for (let i = 0; i < 5 - stars; i++) {
            starsArray.push(<StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" key={i} />);
        }
        return starsArray;
    }

    const product = productPurchased ? (
        <Link href={`${productPurchased.name.toLowerCase()}*${productPurchased.id}`}>
            {productPurchased.name}
        </Link>
    ) : (
        customProductPurchased
    );

    return (
        <div className="rounded-lg bg-card p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg">
            <div className="mb-4 flex items-center">
                <Avatar className="mr-4">
                    <AvatarImage src={imageUrl} />
                    <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <a href={`${reviewUrl}`} className="text-sm text-muted-foreground underline-offset-2 underline cursor-pointer">From {reviewFrom}</a>
                    <div className="text-sm text-muted-foreground">Published {published}</div>
                </div>
            </div>
            <div className="mb-4">
                <h4 className="text-lg font-semibold">{title}</h4>
                <p className="text-muted-foreground">
                    {review}
                </p>
                <div className="mt-4 text-sm text-muted-foreground">Product Purchased: {product}</div>
            </div>
            <div className="flex items-center gap-2 text-primary">
                {handleStars(stars)}
            </div>
        </div>
    )
}

export default ReviewCard