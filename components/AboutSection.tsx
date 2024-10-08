import React from "react";
import Image from "next/image";

import leftGradient from "../public/images/about-lb.svg";
import rightGradient from "../public/images/about-rm.svg";

import { PageCard } from "@/components/PageCard";
import { ABOUT_US_DATA } from "@/utils/constants";
import { SOCIAL_DATA } from "@/utils/constants";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="relative w-screen min-h-screen overflow-hidden bg-white"
    >
      <div
        className="absolute top-0 right-[1%] w-[700px] h-[700px] bg-no-repeat bg-contain opacity-20 md:opacity-100 z-0"
        style={{
          backgroundImage: `url(${rightGradient.src})`,
        }}
      />

      <div
        className="absolute bottom-[-61%] left-[-17%] w-[700px] h-[700px] bg-no-repeat bg-contain opacity-60 z-0"
        style={{
          backgroundImage: `url(${leftGradient.src})`,
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 flex flex-col md:flex-row justify-evenly items-center w-full max-w-7xl p-4 md:p-8">
          <div className="max-w-xl flex flex-col items-center md:items-start">
            <PageCard
              content={ABOUT_US_DATA.cardContent}
              backgroundColor="#6DAABD"
            />

            <h1 className="text-3xl font-bold mb-2 my-2 md:my-6 sm:text-5xl">
              {ABOUT_US_DATA.title}
            </h1>

            <p className="whitespace-pre-line w-full py-4 md:pt-0 overflow-hidden text-wrap font-medium text-sm sm:text-base px-8 md:px-0">
              {ABOUT_US_DATA.mainParagraph}
            </p>
            <p className="whitespace-pre-line w-full overflow-hidden text-wrap font-light text-textGray text-sm sm:text-base px-8 md:px-0">
              {ABOUT_US_DATA.secondaryParagraph}
            </p>

            <div className="flex mt-8 gap-4">
              {SOCIAL_DATA.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={40}
                    height={40}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-8 md:mt-0 hidden md:block">
            <Image
              src={ABOUT_US_DATA.pogLogo}
              alt="pog logo"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
