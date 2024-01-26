"use client"

import { useState } from "react";
import { Computer } from "@/types";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import LoadingNow from "./loading";

interface ComputerSpecProps {
    data: Computer;
}

const ComputerSpecData = dynamic(
    () => import("./computer-spec-data"), {
    loading: () => <div className="flex justify-center items-center my-4"><LoadingNow /></div>,
    ssr: false,
    }
);

const ComputerSpec: React.FC<ComputerSpecProps> = ({ data }) => {
    const [showSpecs, setShowSpecs] = useState(false);

    return (
        <div className="container mx-auto">
            <h3
                className="text-3xl font-bold text-primary mt-6 mb-8 cursor-pointer flex justify-between items-center"
                onClick={() => setShowSpecs(!showSpecs)}
            >
                Uitgebreide specificaties
                <ChevronDown size={32} className={`transform transition-transform duration-300 ${showSpecs ? 'rotate-180' : ''}`} />
            </h3>
            {showSpecs && (
            <ComputerSpecData data={data} />
            )}
        </div>
      );
    }

export default ComputerSpec;