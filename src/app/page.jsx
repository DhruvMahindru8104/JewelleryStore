import Image from "next/image";
import HeroSection from "@/components/mycomponents/Hero";
import Gallery from "@/components/mycomponents/gallery";
import OverviewSection from "@/components/mycomponents/Scroll";
import JewelleryMetricsSection from "@/components/mycomponents/Metricsme";
import FounderMessageSection from "@/components/mycomponents/Founder";
import TestimonialsSection from "@/components/mycomponents/testimonials";
import ContactSection from "@/components/mycomponents/Contact";
import Footer from "@/components/mycomponents/Footer";
export const metadata = {
  title: "Prempal Jeweller | Handcrafted Jewellery in India",
  description: "Discover timeless handcrafted jewellery from Prempal Jeweller. Gold, silver, and custom designs made with love and precision.",
  keywords: "Prempal Jeweller, handcrafted jewellery, gold jewellery, silver jewellery, Indian jeweller, custom jewellery",
  authors: [{ name: "Prempal Jeweller" }],
  robots: "index, follow",
   openGraph: {
    title: "Prempal Jeweller | Handcrafted Jewellery in India",
    description: "Explore beautiful handcrafted jewellery from Prempal Jeweller.",
    url: "https://prempaljeweller.vercel.app",
    siteName: "Prempal Jeweller",
    images: [
      {
        url: "/opengraph-image.jpg", // Host this image locally
        width: 1200,
        height: 630,
        alt: "Prempal Jeweller Collection",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prempal Jeweller",
    description: "Discover timeless handcrafted jewellery from Prempal Jeweller.",
    images: ["/opengraph-image.jpg"],
  },
};
export default function Home() {
  return (
 <> 
 <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16 ">
  <HeroSection/>
  <Gallery/>
  <OverviewSection/>
  <FounderMessageSection/>
  <JewelleryMetricsSection/>
  <TestimonialsSection/>
  <ContactSection/>
  <Footer/>

 </div>
 </>
  );
}
