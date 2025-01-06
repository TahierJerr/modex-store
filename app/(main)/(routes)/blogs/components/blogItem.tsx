import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Blog } from "@/types"
import { TagIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogItemProps {
    blog: Blog
    isNewest: boolean
}

export const BlogItem: React.FC<BlogItemProps> = ({ blog, isNewest }) => {
    const imageBlock = blog.content.find((block) => block.type === "image")
    
    return (
    <Card className={`h-full transition-all hover:shadow-lg ${isNewest ? "bg-primary text-primary-foreground" : ""}`}>
        <Link href={`/blogs/${encodeURIComponent(blog.slug)}`} className="block h-full">
            <CardHeader className="relative p-0">
                <div className="relative h-48 w-full">
                    <Image
                    src={imageBlock?.url || "/placeholder.svg"}
                    alt={imageBlock?.alt || "Blog image"}
                    layout="fill"
                    objectFit="cover"
                    />
                    <Badge 
                    variant={isNewest ? "secondary" : "default"}
                    className="absolute top-4 right-4"
                    >
                    {blog.createdAt}
                </Badge>
            </div>
        </CardHeader>
        <CardContent className="p-4">
            <CardTitle className={`mb-2 ${isNewest ? "text-3xl" : "text-xl"}`}>
                {blog.title}
            </CardTitle>
            <p className={`text-sm ${isNewest ? "text-lg" : ""} mb-4 ${isNewest ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                {blog.description}
            </p>
        </CardContent>
        <CardFooter className="p-4">
            <div className="flex flex-wrap gap-2">
                {blog.tags?.map((tag) => (
                    <Badge className="gap-2" variant={isNewest ? "secondary" : "default"}>
                        <TagIcon size={12} strokeWidth={2.5} /><span>{tag}</span>
                    </Badge>
                    ))}
                </div>
            </CardFooter>
        </Link>
    </Card>
    )
}

