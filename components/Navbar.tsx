import React, { useState, useEffect } from "react";
import Image from "next/image";
import PogLogo from "../public/images/pog-logo-navbar.png";
import JoinUsButton from "./JoinUsButton";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"; 
import { NAVBAR_MENU_DATA, SOCIAL_DATA } from "@/utils/constants";

export const Navbar: React.FC<{ onToggleDarkMode: (isDarkMode: boolean) => void }> = ({ onToggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeClass = "dark";
    if (isDarkMode) {
      document.documentElement.classList.add(darkModeClass);
    } else {
      document.documentElement.classList.remove(darkModeClass);
    }
    onToggleDarkMode(isDarkMode);
  }, [isDarkMode, onToggleDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
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

   
      <div>
        <button
          onClick={toggleDarkMode}
          className="md:hidden text-2xl text-footerBG hover:text-white dark:text-white dark:hover:text-gray-300 z-50 absolute right-14 top-5" 
        >
          {isDarkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </button>
        <button
          onClick={toggleMenu}
          className="md:hidden z-50  right-4 top-4 fixed"
        >
          {isMenuOpen ? (
            <IoCloseOutline size={30} />
          ) : (
            <IoIosMenu size={30} className="text-footerBG dark:text-white" />
          )}
        </button>
      </div>


      <div className="flex-1 justify-end space-x items-center hidden md:flex ">
        <button
          onClick={toggleDarkMode}
          className="text-3xl hover:text-footerBG dark:hover:text-gray-300"
        >
          {isDarkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </button>
        {NAVBAR_MENU_DATA.menuItems.map((item, index) => (
          
          <a key={index} href={item.href} className="hover:text-footerBG px-10 dark:hover:text-gray-300 hover:underline" >
            {item.name}
          </a>
        ))}
        <JoinUsButton />
      </div>

     
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-footerBG z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
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