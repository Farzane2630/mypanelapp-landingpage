import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import CTA from "@/components/sections/CTA";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
