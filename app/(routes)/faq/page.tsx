"use client";

import { useState, useEffect } from "react";

import Faq from "@/components/faq";
import getAnswers from "@/actions/get-answers";
import Head from "next/head";

const FaqPage = async () => {
    const data = await getAnswers();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div>
        <Head>
            <title>FAQ</title>
        </Head>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 text-white mt-20">
            <Faq data={data}/>
            </div>
            </div>
    );
}

export default FaqPage;