import React from "react";
import { twMerge } from "tailwind-merge";

interface JoinUsButtonProps {
    className?: string; // optional 
}

export default function JoinUsButton({ className }: JoinUsButtonProps) {
    return (
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc9qkWndNNb-XiwJDcNdkCH__YEOwWHeLsinm1MemqUhRNbgg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className={twMerge(
                'bg-gradient-to-b from-[#F0DBA6] via-[#EABC42] to-[#EABC42] rounded-full p-2 text-black border-black border-2 w-[145px] flex justify-center items-center z-10',
                className
            )}
        >
            Üye Ol
        </a>
    );
}
