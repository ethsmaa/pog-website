import Image from "next/image";
import { Navbar } from "./Navbar";

import castle from "../public/images/castle-and-clouds.png";
import pogText from "../public/images/pog-text.png";
import clouds from "../public/images/cloudsNew.png";
import mobileClouds from "../public/images/mobile-clouds.png";
import mobileCastle from "../public/images/mobile-castle-and-clouds.png";

export default function HomeSection() {
  return (
    <section className="relative h-screen md:h-[1110px] bg-gradient-to-b from-[#38BDF8] to-[#218bb9] overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* castle and clouds */}
      <div className="w-full absolute bottom-0 z-10">
        {/* mobil  */}
        <Image
          src={mobileCastle}
          alt="mobile castle and clouds"
          className="block md:hidden w-full h-full object-cover"
        />
        {/* web  */}
        <Image
          src={castle}
          alt="web castle and clouds"
          className="hidden md:block absolute bottom-0 left-0 w-full"
        />
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 top-[200px] z-10">
        <Image src={pogText} alt="pogText" className="w-96" />
      </div>

      {/* clouds */}
      <div className="absolute inset-x-0 top-0 w-full overflow-visible z-0">
        <Image
          src={mobileClouds}
          alt="mobile clouds"
          layout="responsive"
          width={3000}
          height={3000}
          className="block md:hidden min-w-full min-h-full object-cover scale-150 translate-y-[40%]"
        />
        <Image
          src={clouds}
          alt="web clouds"
          className="hidden md:block absolute top-[40px] right-[20px] w-auto h-auto"
        />
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 top-[320px] z-10">
        <button className="bg-[#D5F9FF] text-[#487787] py-3 px-8 rounded-full shadow-lg text-xl font-medium hover:bg-[#487787] hover:text-[#D5F9FF]">
          <a href="#about">Keşfet</a>
        </button>
      </div>
    </section>
  );
}
