import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "./Navbar";

import castle from "../public/images/light-castle.png";
import darkCastle from "../public/images/dark-castle.png"; //darkmode
import mobileCastle from "../public/images/mobile-castle-and-clouds.png";

import pogText from "../public/images/pog-text.png";

import clouds from "../public/images/cloudsNew.png";
import mobileClouds from "../public/images/mobile-clouds.png";

import stars from "../public/images/star.png"; // darkmode
import Link from "next/link";

export default function HomeSection() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = (darkMode: boolean) => {
    setIsDarkMode(darkMode);
  };

  return (
    <section
      className={`relative h-screen md:h-[1110px] overflow-hidden ${isDarkMode ? "bg-[#042136]" : "bg-gradient-to-b from-[#38BDF8] to-[#218bb9]"
        }`}
    >
      <Navbar onToggleDarkMode={handleToggleDarkMode} />

      {/* castle and clouds */}
      <div className="w-full absolute -bottom-10 z-10">
        <Image
          src={isDarkMode ? mobileCastle : mobileCastle} // TODO: DARK MODE MOBILE CASTLE YAPILMADI!
          alt="mobile castle and clouds"
          className="block md:hidden w-full h-full object-cover"
        />
        <Image
          src={isDarkMode ? darkCastle : castle}
          alt="web castle and clouds"
          className="hidden md:block absolute bottom-0 left-0 w-full"
        />
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 top-[200px] md:top-[150px] z-10">
        <Image src={pogText} alt="pogText" className="w-96" />
      </div>

      {/* clouds */}
      <div className="absolute inset-x-0 top-0 w-full overflow-visible z-0">
        {/* mobile version */}
        <Image
          src={isDarkMode ? stars : mobileClouds}
          alt="mobile clouds"
          layout="responsive"
          width={3000}
          height={3000}
          className="block md:hidden min-w-full min-h-full object-cover scale-150 translate-y-[40%]"
        />
        {/* web version */}
        <Image
          src={isDarkMode ? stars : clouds}
          alt="web clouds"
          className="hidden md:block absolute top-[10px]  right-[20px] w-auto h-auto"
        />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[400px] z-10">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="relative bg-[#1a264e] dark:bg-white text-white dark:text-gray-900 py-3 px-10 rounded-full shadow-lg text-sm md:text-xl font-medium transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-transparent dark:hover:bg-transparent overflow-hidden group">
            <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gray-900 dark:group-hover:border-white"></span>
            <a href="#about" className="relative">Keşfet</a>
          </button>
          <button className="relative bg-gradient-to-r from-[#F2C334] via-[#F2A03C] to-[#BC3964] text-white dark:text-gray-900 py-3 px-10 rounded-full shadow-lg text-sm md:text-xl font-medium transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-transparent dark:hover:bg-transparent overflow-hidden group">
            <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gray-900 dark:group-hover:border-white"></span>
            <Link href="/eggjam" className="relative">EGG JAM</Link>
          </button>
        </div>
      </div>






    </section>
  );
}