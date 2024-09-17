import React from "react";
import { twMerge } from "tailwind-merge";


interface JoinUsButtonProps {
    className?: string; // optional 
}

export default function JoinUsButton({className}: JoinUsButtonProps) {
    return (
        <button className={twMerge('bg-gradient-to-b from-[#F0DBA6] via-[#EABC42] to-[#EABC42] rounded-full p-2 text-black border-black border-2 w-[145px]',className)}>Üye Ol</button>
    );
}