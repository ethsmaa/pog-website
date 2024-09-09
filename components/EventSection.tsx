import React from 'react';
import leftGradient from '../public/images/event-lb.svg';
import rightGradient from '../public/images/event-rm.svg';

export default function EventSection() {
  return (
    <div className="relative w-lvw h-screen overflow-hidden bg-white">
      {/* main gradient */}
      <div
        className="absolute top-[7%] right-[-10%] w-[700px] h-[800px] bg-no-repeat bg-contain opacity-60 md:opacity-80 z-0"
        style={{
          backgroundImage: `url(${rightGradient.src})`,
        }}
      />

      {/* gradient sol alt kose */}
      <div
        className="absolute bottom-[1%] left-[-15%] w-[750px] h-[700px] bg-no-repeat bg-contain opacity-70 z-0"
        style={{
          backgroundImage: `url(${leftGradient.src})`,
        }}
      />
    </div>
  );
}
