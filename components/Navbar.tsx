import React from 'react';
import PogLogo from '../public/images/pog-logo-navbar.png';
import Image from 'next/image';

export const Navbar: React.FC = () => {

    return (
        <div className="w-full flex justify-between p-4 text-white text-xl font-medium relative">

            <div className="z-40 fixed left-4 top-4">
                <Image
                    src={PogLogo}
                    alt="PogLogo"
                    width={120}
                    height={60}
                    className="block md:w-[120px] md:h-[60px] w-[80px] h-[40px]"

                />
            </div>

            <div className='flex-1 justify-end space-x-12 items-center hidden md:flex'>
                <a href="#about" className='hover:text-[#11243d]'>Hakkımızda</a>
                <a href="#sponsors" className='hover:text-[#11243d]'>Sponsorlar</a>
                <a href="#events" className='hover:text-[#11243d]'>Etkinlikler</a>
                <a href="#members" className='hover:text-[#11243d]'>Üyeler</a>
                <button className='bg-gradient-to-b from-[#F0DBA6] via-[#EABC42] to-[#EABC42] rounded-full p-2
                 text-black border-black border-2 w-[145px]'>Üye Ol</button>
            </div>
        </div>
    );
}
