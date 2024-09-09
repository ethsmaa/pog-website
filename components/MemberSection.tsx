import React from 'react';
import leftGradient from '../public/images/member-lb.svg';
import rightGradient from '../public/images/member-rb.svg';

export default function MemberSection() {
  return (
    <div className="relative w-lvw h-screen overflow-visible bg-white">
      {/* main gradient */}
      <div
        className="absolute top-[30%] right-0 w-[700px] h-[800px] bg-no-repeat bg-contain opacity-60 md:opacity-75 z-0"
        style={{
          backgroundImage: `url(${rightGradient.src})`,
        }}
      />

      {/* gradient sol alt kose */}
      <div
        className="absolute bottom-[-7%] left-[0%] w-[750px] h-[700px] bg-no-repeat bg-contain opacity-65 z-0"
        style={{
          backgroundImage: `url(${leftGradient.src})`,
        }}
      />
    </div>
  );
}
