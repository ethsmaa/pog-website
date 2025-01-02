import React from 'react';
import Image from 'next/image';

import maskot from '../../public/images/maskot.svg';
import eggjamNavbar from '../../public/images/eggjamlogo.png';
import eggjam from '../../public/images/buyukeggjam.png';
import instagram from '../../public/icons/instagramEgg.svg';
import email from '../../public/icons/mailEgg.svg';
import fullBackground from '../../public/images/websitefullbackground2xpng.png';

export default function Page() {
    return (
        <div
            className="relative min-h-screen"
            style={{
                backgroundImage: `url(${fullBackground.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >


            <title>Eggjam</title>
            <meta name="description" content="Eggjam hakkında bilgi alabileceğiniz web sitesi." />


            {/* Navigation Bar */}
            <nav className="flex justify-between items-center px-4 py-4 text-[#1F1826] fixed w-full z-40 md:px-10">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <Image src={eggjamNavbar} alt="Logo" width={72} height={25} />
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-20 text-lg md:text-xl font-semibold mx-4 md:mx-12">
                    <a
                        href="#about"
                        className="relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-[#1F1826] hover:after:absolute hover:after:left-0 hover:after:bottom-[-2px] transition"
                    >
                        Hakkımızda
                    </a>
                    <a
                        href="#contact"
                        className="relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-[#1F1826] hover:after:absolute hover:after:left-0 hover:after:bottom-[-2px] transition"
                    >
                        İletişim
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center text-white h-screen px-4 z-10 md:flex-row md:justify-evenly">
                {/* Left Section (Maskot) */}
                <div className="flex-shrink-0 mb-8 md:mr-8 md:mb-0">
                    <Image src={maskot} alt="Maskot" width={300} height={300} className="md:w-[400px] md:h-[400px]" />
                </div>

                {/* Right Section (Egg Jam Logo and Button) */}
                <div className="flex flex-col items-center">
                    <Image src={eggjam} alt="Egg Jam Logo" width={240} height={90} className="mb-4 md:w-[320px] md:h-[135px]" />
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSco0KRJzjs-dgc2Bltbip9KV-xIQhOORvIyeo4xwkKEJ4Njrg/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 px-6 py-2 text-[#F2DCC2] font-semibold rounded-full bg-[#1F1826] border-2 border-[#1F1826] hover:bg-transparent hover:text-black hover:border-black transition active:bg-black active:text-[#F2DCC2] active:border-[#F2DCC2] md:px-8 md:py-3"
                    >
                        Aramıza Katıl
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="relative flex items-center justify-start h-screen px-6 text-black z-10 md:px-16">
                <div className="max-w-2xl mx-4 md:max-w-4xl md:mx-60">
                    <h2 className="text-[#1F1826] text-3xl font-bold mb-6 md:text-5xl md:mb-8">Hakkımızda</h2>
                    <p className="mb-4 text-base leading-relaxed md:text-lg">
                        Merhaba! <br />
                        Biz, <strong>Ege Bölgesi genelindeki</strong> öğrenci topluluklarının bir araya gelerek oluşturduğu kolektif bir oluşumuz.
                        Amacımız, üniversite öğrencilerini bir araya getirerek oyun geliştirme alanında yaratıcılığı,
                        dayanışmayı ve ekip çalışmasını desteklemek.
                    </p>
                    <p className="mb-4 text-base leading-relaxed md:text-lg">
                        Düzenlediğimiz <strong>Game Jam</strong>, üniversite öğrencilerine açık bir etkinlik olarak, <strong>48 saat</strong> süren bir maraton
                        şeklinde gerçekleşiyor. Belirlenen bir tema çerçevesinde kısa sürede oyun geliştirme deneyimi sunan
                        bu etkinlik, sadece bir yarışma değil; aynı zamanda yeni fikirlerin ortaya çıkmasına, bilgi paylaşımına
                        ve eğlenceli bir öğrenme ortamı yaratmaya katkıda bulunmayı hedefliyor.
                    </p>
                    <p className="text-base leading-relaxed md:text-lg">
                        Birlikte üretmekten, paylaşmaktan ve oyun dünyasına yeni değerler katmaktan keyif alıyoruz. Eğer sen
                        de bu heyecana ortak olmak, fikirlerini gerçeğe dönüştürmek ve bu kolektif ruhun bir parçası olmak
                        istersen, seni de aramızda görmekten mutluluk duyarız!
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative flex items-center justify-start min-h-screen px-6 text-black z-10 md:px-16">
                <div className="max-w-2xl mx-4 md:max-w-4xl md:mx-60">
                    <h2 className="text-[#1F1826] text-3xl font-bold mb-6 md:text-5xl md:mb-8">İletişim</h2>
                    <div className="flex flex-col space-y-4 text-base md:space-y-6 md:text-lg">
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/eggjamm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 md:space-x-4"
                        >
                            <Image src={instagram} alt="Instagram" width={30} height={30} className="md:w-[40px] md:h-[40px]" />
                            <span>@eggjamm</span>
                        </a>
                        {/* Email */}
                        <a
                            href="mailto:eggjammer@gmail.com"
                            className="flex items-center space-x-3 md:space-x-4"
                        >
                            <Image src={email} alt="Email" width={30} height={30} className="md:w-[40px] md:h-[40px]" />
                            <span>eggjammer@gmail.com</span>
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
}
