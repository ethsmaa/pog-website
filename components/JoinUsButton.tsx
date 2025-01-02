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
        "bg-gradient-to-b from-joinusGradientFrom via-joinusGradientVia to-joinusGradientTo rounded-full p-2 text-black border-black border-2 w-[145px] flex justify-center items-center z-10 transition-transform duration-300 hover:scale-105 hover:shadow-lg",
        className
      )}
    >
      Üye Ol
    </a>
  );
}

