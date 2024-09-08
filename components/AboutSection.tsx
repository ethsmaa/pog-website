import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="relative flex justify-center items-center h-screen w-screen bg-gray-100">
      {/* Burada resmi tam genişlik ve yükseklik olarak ayarlıyoruz */}
      <div className="relative w-full h-full">
        <Image
          src="/about-us-background.png"
          alt="About Section Background"
          layout="fill"
          objectFit="cover"

          objectPosition="center"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl">Burasi About Kismi</h1>
          <h2>POG</h2>
        </div>
      </div>
    </div>
  );
}
