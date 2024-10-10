import { Link, StarIcon } from "lucide-react"
import { Computer } from "@/types";

interface ReviewCardProps {
    className?: string;
    name: string;
    review: string;
    stars: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, review, stars, className }) => {

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

    return (
        <div className={`rounded-lg bg-card p-6 shadow-card-shadow max-w-lg transition-all duration-300 ease-in-out hover:shadow-lg border ${className}`}>
            <div className="mb-4 flex items-center">
                <p className="text-md font-semibold">{name}</p>
            </div>
            <div className="mb-4">
                <p className="text-muted-foreground text-sm">
                    {review}
                </p>
            </div>
            <div className="flex items-center gap-2 text-primary">
                {handleStars(stars)}
            </div>
        </div>
    )
}

export default ReviewCard