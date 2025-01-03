import React from 'react';
import Image from 'next/image';

import maskot from '../../public/images/maskot.svg';
import eggjamNavbar from '../../public/images/eggjamlogo.png';
import eggjam from '../../public/images/buyukeggjam.png';

import instagram from '../../public/icons/instagramEgg.svg';
import email from '../../public/icons/mailEgg.svg';

// background image
import fullBackground from '../../public/images/websitefullbackground2xpng.png';

// sponsor lgoolari
import furtleGame from '../../public/logos/furtle_white@4x 1.png';
import teamMachiaveli from '../../public/logos/TM BEYAZ 1.png';
import depark from '../../public/logos/DEPARK LOGO BEYAZ 1.png';
import bambu from '../../public/logos/Bambu LOGO-W 1.png';
import anima from '../../public/logos/deu_anima_logo 1.png';
import pog from '../../public/logos/POG O VERS2 1.png';
import otg from '../../public/logos/ogtlogo 1.png';
import iztech from '../../public/logos/circle 1@2x.png';
import mcbu from '../../public/logos/mcbu Oyun Tasarımı ve Geliştiricileri Topluluğu logo 1.png';

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
            <nav className="flex justify-between items-center px-4 py-4 text-[#1F1826] md:fixed w-full z-40 md:px-10">
                <div className="flex items-center space-x-3">
                    <Image src={eggjamNavbar} alt="Logo" width={72} height={25} />
                </div>
                <div className="hidden md:flex space-x-14 text-base md:text-lg font-semibold">
                    <a href="#about" className="hover:underline">Hakkımızda</a>
                    <a href="#contact" className="hover:underline">İletişim</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center text-white h-screen px-4 text-center md:flex-row md:justify-evenly">
                <div className="flex-shrink-0 mb-8 md:mr-8 md:mb-0">
                    <Image src={maskot} alt="Maskot" width={300} height={300} className="w-48 h-48 md:w-[400px] md:h-[400px]" />
                </div>
                <div className="flex flex-col items-center">
                    <Image src={eggjam} alt="Egg Jam Logo" width={240} height={90} className="mb-4 w-60 h-auto md:w-[320px]" />
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSco0KRJzjs-dgc2Bltbip9KV-xIQhOORvIyeo4xwkKEJ4Njrg/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 px-6 py-2 text-[#F2DCC2] font-semibold rounded-full bg-[#1F1826] border-2 border-[#1F1826] hover:bg-transparent hover:text-black hover:border-black transition md:px-8 md:py-3"
                    >
                        Aramıza Katıl
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="relative flex items-center justify-start min-h-screen px-6 py-12 text-black md:px-16">
                <div className="max-w-2xl mx-auto md:max-w-4xl">
                    <h2 className="text-[#1F1826] text-3xl font-bold mb-6 md:text-5xl md:mb-8">Hakkımızda</h2>
                    <p className="mb-4 text-base leading-relaxed md:text-lg">
                        Merhaba! <br />
                        Biz, <strong>Ege Bölgesi genelindeki</strong> öğrenci topluluklarının bir araya gelerek oluşturduğu kolektif bir oluşumuz.
                        Amacımız, üniversite öğrencilerini bir araya getirerek oyun geliştirme alanında yaraticiliği,
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
            <section id="contact" className="relative min-h-screen px-6 py-12 text-black md:px-16">
                <div className="max-w-2xl mx-auto md:max-w-4xl">
                    <h2 className="text-[#1F1826] text-3xl font-bold mb-6 md:text-5xl md:mb-8 text-left">İletişim</h2>
                    <div className="flex flex-col space-y-6">
                        <a
                            href="https://www.instagram.com/eggjamm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3"
                        >
                            <Image src={instagram} alt="Instagram" width={30} height={30} />
                            <span>@eggjamm</span>
                        </a>
                        <a href="mailto:eggjammer@gmail.com" className="flex items-center space-x-3">
                            <Image src={email} alt="Email" width={30} height={30} />
                            <span>eggjammer@gmail.com</span>
                        </a>
                    </div>
                </div>
            </section>
            {/*  Logos Section 
            responsive kodu bu kadar kotu yazmak biz de istemezdik...
            */}
            <div className="absolute bottom-0 left-0 right-0 py-8">
                {/* Mobile View */}
                <div className="flex flex-wrap justify-around items-end md:hidden">
                    <Image src={furtleGame} alt="Furtle Game" width={140} height={140} className="m-4" />
                    <Image src={teamMachiaveli} alt="Team Machiaveli" width={160} height={160} className="m-4" />
                    <Image src={depark} alt="Depark" width={150} height={150} className="m-4" />
                    <Image src={bambu} alt="Bambu" width={40} height={40} className="m-4" />
                    <div className="grid grid-cols-3 gap-2">
                        <Image src={anima} alt="Grup 34" width={70} height={70} className="m-4" />
                        <Image src={pog} alt="Grup 34" width={70} height={70} className="m-4" />
                        <Image src={otg} alt="Grup 34" width={70} height={70} className="m-4" />
                        <Image src={iztech} alt="Grup 34" width={70} height={70} className="m-4" />
                        <Image src={mcbu} alt="Grup 34" width={70} height={70} className="m-4" />
                    </div>
                </div>
                {/* Web View */}
                <div className="hidden md:flex absolute bottom-0 left-0 right-0  flex-wrap justify-around items-end py-8">
                <Image src={furtleGame} alt="Furtle Game" width={210} height={210} className="m-8" />
                <Image src={teamMachiaveli} alt="Team Machiaveli" width={280} height={280} className="m-4" />
                <Image src={depark} alt="Depark" width={240} height={240} className="m-10" />
                <Image src={bambu} alt="Bambu" width={90} height={90} className="m-4" />
                <div className=''>
                    <Image src={anima} alt="Grup 34" width={90} height={90} className="m-8" />
                    <Image src={pog} alt="Grup 34" width={90} height={90} className="m-8" />
                    <Image src={otg} alt="Grup 34" width={90} height={90} className="m-8" />
                    <Image src={iztech} alt="Grup 34" width={90} height={90} className="m-8" />
                    <Image src={mcbu} alt="Grup 34" width={90} height={90} className="m-8" />
                </div>
            </div>
            </div>
        </div>

    );
}