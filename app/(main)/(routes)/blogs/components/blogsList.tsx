"use client"

import { Input } from "@/components/ui/input";
import { BlogItem } from "./blogItem";
import { Blog } from "@/types";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { useSearchParams } from "next/navigation";

const BlogsList = ({ blogs }: { blogs: Blog[] }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const params = useSearchParams();

    useEffect(() => {
        if (params.has("search")) {
            setSearchTerm(params.get("search") || "");
        }
    }, [params]);

    const filteredBlogs = searchTerm
        ? blogs.filter((blog) =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.tags?.some((tag) =>
                tag.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )
        : blogs;

    return (
        <>
            {/* Search Input */}
            <div className="mb-6">
                <Input
                    type="text"
                    placeholder="Search blogs by title or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                />
            </div>

            {/* Separator */}
            <Separator className="my-4 bg-slate-300" />

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog, index) => (
                    <div
                        key={blog.id}
                        className={
                            index === 0
                                ? "col-span-1 sm:col-span-2 lg:col-span-3"
                                : ""
                        }
                    >
                        <BlogItem blog={blog} isNewest={index === 0} />
                    </div>
                ))}
            </div>

            {/* No Blogs Found Message */}
            {filteredBlogs.length === 0 && (
                <p className="text-center text-gray-600 mt-6">
                    No blogs found matching your search. Try different keywords or explore all blogs.
                </p>
            )}
        </>
    );
};

export default BlogsList;
