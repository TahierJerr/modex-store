"use client";

import { Category } from "@/types";
import { useContext, useState, createContext, useEffect } from "react";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const CategorynContext = createContext<Category[]>([]);

export const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            });

    }, []);

    return (
        <CategorynContext.Provider value={categories}>{children}</CategorynContext.Provider>
    )
}

export const useCategoryContext = () => useContext(CategorynContext);