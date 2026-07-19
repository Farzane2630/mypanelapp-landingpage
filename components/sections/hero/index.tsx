import HeroContent from "./hero-content";
import HeroImage from "./hero-image";

export default function Hero() {
  return (
    <section
      aria-label="hero-section"
      className="via-primary-50 to-primary-200 flex flex-col gap-x-8 gap-y-4 rounded-lg bg-linear-to-br from-white p-8 lg:flex-row"
    >
      <HeroContent />
      <HeroImage />
    </section>
  );
}
