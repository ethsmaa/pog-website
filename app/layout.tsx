import React from 'react';
import "./globals.css";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <body className="container">
        <div>header</div>
        <main>{children}</main>
        <div>footer</div>
       
      </body>
    </html>
  );
}