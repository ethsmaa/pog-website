import React from 'react';
import "./globals.css";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="w-full">
        <div className="w-full">header</div>
        <main>{children}</main>
        <div className="w-full">footer</div>
      </body>
    </html>
  );
}