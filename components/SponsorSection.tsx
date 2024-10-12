import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function SponsorSection() {
  return (
    <div
      id="sponsors"
      className="bg-sponsorBG dark:bg-gray-800 w-screen flex items-center justify-center text-white"
    >
      <div className="p-10 flex justify-center items-center flex-col space-y-2 py-32">
        <FaQuoteLeft className="self-start text-[30px] text-white" />
        <div className="w-5/6 md:w-3/4 text-center">
          Video oyunları sadece etkileşimli bir sanat biçimi değil, başka bir
          insanın gözlerinden yaşamamızı sağlayan bir yoldur.
        </div>
        <div className="italic">Hideo Kojima</div>
      </div>
    </div>
  );
}
