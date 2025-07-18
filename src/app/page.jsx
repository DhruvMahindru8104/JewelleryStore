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
  title: 'Best Jeweller in Amritsar | Prempal Jewellers',
  description: 'Prempal Jewellers - Trusted jewellery shop in Amritsar. Explore gold, diamond, and wedding jewellery collections at best prices.',
  keywords: 'best jeweller in Amritsar, Amritsar jewellery shop, gold jewellery, diamond jewellery',
  icons: {
    icon: '/favicon.ico',
  },
  authors: [{ name: "Prempal Jeweller" }],
  robots: "index, follow",
   openGraph: {
    title: "Prempal Jeweller | Handcrafted Jewellery in India",
    description: "Explore beautiful handcrafted jewellery from Prempal Jeweller.",
    url: "https://prempaljeweller.vercel.app",
    siteName: "Prempal Jeweller",
    images: [
      {
        url: "/LogoBhai.jpeg", // Host this image locally
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
    images: ["/LogoBhai.jpeg"], // Host this image locally
  },
};
export default function Home() {
  return (
 <> 
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JewelryStore",
              "name": "Prempal Jewellers",
              "image": "https://prempaljeweller.vercel.app/your-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Shop Address",
                "addressLocality": "Amritsar",
                "addressRegion": "Punjab",
                "postalCode": "143001",
                "addressCountry": "IN"
              },
              "telephone": "+91-XXXXXXXXXX",
              "url": "https://prempaljeweller.vercel.app"
            })
          }}
        />
      </head>
      <main>

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
      </main>
 </>
  );
}
