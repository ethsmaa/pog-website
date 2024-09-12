import React from "react";
import Image from "next/image";

import footerLogo from "../public/images/LOGOVERS2.png";
import { CONTACT_INFO_DATA } from "@/utils/constants";
import JoinUsButton from "./JoinUsButton";

const FooterSection: React.FC = () => {
  return (
    <footer className="relative flex flex-col items-center">
      {/* "Sen de aramıza katıl" kısmı */}
      <div className="absolute transform -translate-y-1/2 flex flex-col items-center">
        <div className="bg-footerCard items-center w-fit rounded-full px-3 py-2 border-4 border-footerBG flex space-x-3">
          <div className="font-medium">
            SEN DE ARAMIZA <span className="text-joinButton drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">KATIL</span>
          </div>
          <JoinUsButton />
        </div>
      </div>

      {/* Footer alanı */}
      <div className="bg-footerBG w-screen h-[380px] p-20">
        <div className="w-full h-full flex justify-between items-center">
          <Image
            src={footerLogo}
            alt="Footer Logo"
            width={200}
          />
          <div className="w-[1px] h-[200px] bg-[#264769] left-1/2 absolute"></div>
          <div className="flex space-x-20">
            <div>
              <h1 className="text-[#72A4D6] text-xl mb-3">{CONTACT_INFO_DATA.follow_us}</h1>
              {CONTACT_INFO_DATA.socials.map((social) => (
                <a className="flex space-x-2 items-center text-white font-thin py-1 hover:text-joinButton" href={social.href} key={social.name}>
                  <Image src={social.src} alt={social.name} width={30} height={30} />
                  <div>{social.name}</div>
                </a>
              ))}
            </div>
            <div>
              <h1 className="text-[#72A4D6] text-xl mb-3">{CONTACT_INFO_DATA.follow_us}</h1>
              {CONTACT_INFO_DATA.contact_address.map((address) => (
                <div className="flex space-x-2 items-center text-white font-thin py-2" key={address}>
                  {address}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;