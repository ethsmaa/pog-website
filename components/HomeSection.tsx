import Image from "next/image";
import allElements from "../public/images/castle-and-clouds.png";

export default function HomeSection() {
    return (
        <section className="relative h-[1110px] bg-[#38BDF8] overflow-hidden">
            {/* Ana içerik */}
            <div className="container mx-auto px-4 py-16 relative z-10">
                <h1 className="text-4xl font-bold text-white mb-4">Hoş Geldiniz</h1>
                <p className="text-xl text-white">Ana sayfa içeriği buraya gelecek</p>
            </div>

            <div className="w-full absolute bottom-0 ">
              
              <Image src={allElements} alt="allElements" className="absolute bottom-0 left-0 w-full" />

            </div>

        </section>
    );
}