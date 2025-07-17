import Image from "next/image";
import HeroSection from "@/components/mycomponents/Hero";
import Gallery from "@/components/mycomponents/gallery";
import OverviewSection from "@/components/mycomponents/Scroll";
import JewelleryMetricsSection from "@/components/mycomponents/Metricsme";
import FounderMessageSection from "@/components/mycomponents/Founder";
import TestimonialsSection from "@/components/mycomponents/testimonials";
import ContactSection from "@/components/mycomponents/Contact";
import Footer from "@/components/mycomponents/Footer";
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
