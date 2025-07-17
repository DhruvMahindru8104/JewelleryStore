import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/mycomponents/Navbar";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '600' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prem Pal Jewellers",
  description: "Best Ring Wholesaler in Amritsar",
    verification: {
    google: "NBcM0KC7LzlFvKgNFic_yLD1FHFResize2ExM6_15Mc",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.className} antialiased`}
      >
         <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 ">

        <Navbar/>
         </div>
        {children}
      </body>
    </html>
  );
}
