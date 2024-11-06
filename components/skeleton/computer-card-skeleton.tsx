"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCartIcon } from "lucide-react"

export default function ComputerCardSkeleton() {
    return (
    <Card className="w-full max-w-sm">
        <CardHeader className="relative">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="absolute top-2 right-2 h-6 w-16" />
        </CardHeader>
        <CardContent className="space-y-4">
            <Skeleton className="h-6 w-3/4" />
            <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center space-x-2">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-full" />
                    </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
                <Skeleton className="h-6 w-24" />
                <Button disabled className="h-8">
                    <ShoppingCartIcon className="mr-2 h-4 w-4" />
                    Buy now
                </Button>
            </CardFooter>
        </Card>
        )
    }