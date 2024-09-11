
import Image from "next/image";
import allElements from "../public/images/castle-and-clouds.png";
import { Navbar } from "./Navbar";

export default function HomeSection() {
    return (
        <section className="relative h-[1110px] bg-gradient-to-b from-[#38BDF8] to-[#218bb9] overflow-hidden">
            <Navbar />


            <div className="w-full absolute bottom-0">
                <Image src={allElements} alt="allElements" className="absolute bottom-0 left-0 w-full" />
            </div>


            <div className="absolute left-1/2 transform -translate-x-1/2 top-[400px]">
                <button className="bg-[#D5F9FF] text-[#487787] py-3 px-8 rounded-full shadow-lg text-xl font-medium
               hover:bg-[#487787] hover:text-[#D5F9FF]">
                    <a href="#about">
                        Explore
                    </a>
                </button>
            </div>
        </section>
    );
}
