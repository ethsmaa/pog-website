'use client';

import React, { useState, useEffect } from 'react';
import leftGradient from '../public/images/member-lb.svg';
import rightGradient from '../public/images/member-rb.svg';

import { MEMBERS_DATA } from '@/utils/constants';
import { MemberCard } from './MemberCard';
import { PageCard } from './PageCard';

export default function MemberSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [membersPerPage, setMembersPerPage] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) { // sm breakpoint
        setMembersPerPage(9) 
      } else {
        setMembersPerPage(10); // 2 satır, her satırda 5 üye
      }
    };

    handleResize(); // İlk yükleme için çağır
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); 
  }, []); 

  const totalPages = Math.ceil(MEMBERS_DATA.membersArray.length / membersPerPage); // math ceil yukari yuvarlar

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  }; // eger simdiki sayfa 0 degilse bir azalt

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  }; // eger simdiki sayfa son sayfa degilse bir arttir


  const currentMembers = MEMBERS_DATA.membersArray.slice(
    currentPage * membersPerPage,
    (currentPage + 1) * membersPerPage
  ); // simdiki sayfada gosterilecek uyeleri al

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white">
      <div
        className="absolute top-[30%] right-0 w-[700px] h-[800px] bg-no-repeat bg-contain opacity-60 md:opacity-75 z-0"
        style={{
          backgroundImage: `url(${rightGradient.src})`,
        }}
      />

      <div
        className="absolute bottom-[-7%] left-[0%] w-[750px] h-[700px] bg-no-repeat bg-contain opacity-65 z-0"
        style={{
          backgroundImage: `url(${leftGradient.src})`,
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-start md:justify-center">
        <div className="relative z-10 flex flex-col items-center w-full max-w-7xl p-2 md:px-24">
          <div className="flex flex-col self-center items-center md:self-start md:items-start mb-8">
            <PageCard content={MEMBERS_DATA.cardContent} backgroundColor="#B88798" />
            <h1 className="text-3xl font-bold mt-2 md:mt-6 sm:text-5xl">Üyelerimiz</h1>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:w-full  ">
            {currentMembers.map((member) => (
              <MemberCard key={member.memberID} member={member} />
            ))}
          </div>

          <div className="flex w-full mt-4">
            {currentPage > 0 && (
              <button
                onClick={handlePrevPage}
                className="px-4 py-2 bg-cardPink text-white rounded-full text-xs md:text-base shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              >
                Önceki
              </button>
            )}
            {currentPage < totalPages - 1 && (
              <button
                onClick={handleNextPage}
                className="px-4 py-2 bg-cardPink text-white rounded-full ml-auto text-xs md:text-base shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              >
                Sonraki
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
