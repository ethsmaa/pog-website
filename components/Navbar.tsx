import React, { useState, useEffect } from "react";
import Image from "next/image";
import PogLogo from "../public/images/pog-logo-navbar.png";
import JoinUsButton from "./JoinUsButton";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"; // Dark/Light Mode ikonları
import { NAVBAR_MENU_DATA, SOCIAL_DATA } from "@/utils/constants";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="w-full flex justify-between p-4 text-white text-xl font-medium relative z-40">
      <div className="z-40 absolute left-4 top-4">
        <Image
          src={PogLogo}
          alt="PogLogo"
          width={120}
          height={60}
          className="block md:w-[120px] md:h-[60px] w-[80px] h-[40px]"
        />
      </div>

      <button
        onClick={toggleMenu}
        className="md:hidden z-50 absolute right-4 top-4"
      >
        {isMenuOpen ? (
          <IoCloseOutline size={30} />
        ) : (
          <IoIosMenu size={30} className="text-footerBG" />
        )}
      </button>

      {/* Dark/Light mode switch button with icons positioned to the left of "Hakkında" */}

      {/* Desktop menu */}
      <div className="flex-1 justify-end space-x-12 items-center hidden md:flex">
        <button
          onClick={toggleDarkMode}
          className="text-3xl hover:text-footerBG"
        >
          {isDarkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </button>
        {NAVBAR_MENU_DATA.menuItems.map((item, index) => (
          <a key={index} href={item.href} className="hover:text-footerBG">
            {item.name}
          </a>
        ))}

        <JoinUsButton />
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-footerBG z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center mt-10 space-y-8">
          <Image
            src={PogLogo}
            alt="PogLogo"
            width={120}
            height={60}
            className="block md:w-[120px] md:h-[60px] w-[80px] h-[40px]"
          />

          <div className="w-3/4 h-[1px] bg-[#264769]" />

          <div className="flex flex-col space-y-8">
            {NAVBAR_MENU_DATA.menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="hover:text-joinButton text-[17px]"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex space-x-4 pt-20">
            {SOCIAL_DATA.socials.map((social, index) => (
              <a key={index} href={social.href}>
                <Image
                  src={social.src}
                  alt={social.name}
                  width={30}
                  height={30}
                />
              </a>
            ))}
          </div>

          <JoinUsButton className="text-md w-[180px]" />
        </div>
      </div>
    </div>
  );
};
