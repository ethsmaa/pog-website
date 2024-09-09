import React from 'react';
import Image from 'next/image';

import leftGradient from '../public/images/about-lb.svg';
import rightGradient from '../public/images/about-rm.svg';
import pogLogo from '../public/images/about-pog.png';

import PageCard from '@/components/PageCard';

import { ABOUT_US_DATA } from '@/utils/constants';


export default function AboutSection() {
  return (
<div className="relative w-full h-screen overflow-hidden bg-white">
{/* main gradient */}
      <div
        className="absolute top-0 right-[-2%] w-[700px] h-[700px] bg-no-repeat bg-contain opacity-60 md:opacity-100 z-0"
        style={{
          backgroundImage: `url(${rightGradient.src})`,
        }}
      />

      {/* gradient sol alt kose*/}
      <div
        className="absolute bottom-[-61%] left-[-17%] w-[700px] h-[700px] bg-no-repeat bg-contain opacity-60 z-0"
        style={{
          backgroundImage: `url(${leftGradient.src})`,
        }}
      />


      <div className='relative z-10 flex justify-evenly items-center h-full'>
        <div>
        <PageCard content='What we do?' backgroundColor="#6DAABD" />

          <div className='text-3xl font-bold py-8 sm:text-5xl'>
            {ABOUT_US_DATA.title}
          </div>

          <div className="whitespace-pre-line w-full max-w-xs sm:max-w-md pb-4 overflow-hidden text-wrap font-medium text-sm sm:text-base">
            {ABOUT_US_DATA.mainParagraph}
          </div>
          <div className="whitespace-pre-line w-full max-w-xs sm:max-w-md overflow-hidden text-wrap font-light text-textGray text-sm sm:text-base">
            {ABOUT_US_DATA.secondaryParagraph}
          </div>
        </div>

        <div className='relative z-10'>
          <Image
            src={pogLogo}
            alt="pog logo"
            width={350}
            height={350}
          />

        </div>
          
      </div>
    </div>
  );
}