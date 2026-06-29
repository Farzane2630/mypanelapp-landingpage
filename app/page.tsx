import CTA from "@/components/sections/CTA";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
    </div>
  );
}
