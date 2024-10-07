import Image from "next/image";
import { Navbar } from "./Navbar";

import allElements from "../public/images/castle-and-clouds.png";
import pogText from "../public/images/pog-text.png";
import clouds from "../public/images/cloudsNew.png";

export default function HomeSection() {
  return (
    <section className="relative h-[1110px] bg-gradient-to-b from-[#38BDF8] to-[#218bb9] overflow-hidden">
      <Navbar />

      <div className="w-full absolute bottom-0 z-10">
        <Image
          src={allElements}
          alt="allElements"
          className="absolute bottom-0 left-0 w-full"
        />
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 top-[200px] z-10">
        <Image src={pogText} alt="pogText" width={375} />
      </div>

      <div className="w-screen h-screen relative z-5">
        <Image
          src={clouds}
          alt="clouds"
       
          className="absolute top-[-48px] right-[20px]"
        />
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 top-[400px] z-10">
        <button
          className="bg-[#D5F9FF] text-[#487787] py-3 px-8 rounded-full shadow-lg text-xl font-medium
               hover:bg-[#487787] hover:text-[#D5F9FF]"
        >
          <a href="#about">Explore</a>
        </button>
      </div>
    </section>
  );
}
