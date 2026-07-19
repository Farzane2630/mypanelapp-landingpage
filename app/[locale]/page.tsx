import Businesses from "@/components/sections/businesses";
import Features from "@/components/sections/features";
import Hero from "@/components/sections/hero";
// import Pricing from "@/components/sections/Pricing";
// import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col px-2">
      <Hero />
      <Features />
      <Businesses />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
    </div>
  );
}
