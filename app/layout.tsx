import type { Metadata } from "next";
import {  DM_Sans } from "next/font/google";
import "./globals.css";



const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Alvin Hartono Portfolio",
  description: "Portfolio Website Alvin Hartono",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${children} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
