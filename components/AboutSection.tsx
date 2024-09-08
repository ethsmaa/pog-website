import React from 'react';
import rightGradient from '/public/about-rm.svg'; // Gradient png dosyasının yolu
import leftGradient from '/public/about-lb.svg'; // Köşe png dosyasının yolu

export default function AboutSection() {
  return (
    <div
      className="about-us-section"
      style={{
        backgroundColor: 'white', // Beyaz arka plan
        position: 'relative', // Gradient'leri belirli konumlarda yerleştirebilmek için
        width: '100vw',
        height: '100vh',
        overflow: 'hidden', // Gradient taşmasını önlemek için
      }}
    >
      {/* main gradient */}
      <div
        style={{
          position: 'absolute',
          top: '0%',
          right: '0%',
          width: '700px', // Boyutu daha da büyüttüm
          height: '700px', // Boyutu daha da büyüttüm
          backgroundImage: `url(${rightGradient.src})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Gradient sol alt köşeye yakın bir yerde */}
      <div
        style={{
          position: 'absolute',
          bottom: '-61%',
          left: '-17%',
          width: '700px',
          height: '700px',
          backgroundImage: `url(${leftGradient.src})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6,
        }}
      />

      
    </div>
  );
}
