import Image from "next/image";
import hero from "@/public/images/hero.webp";
export default function HeroImage() {
  return (
    <Image
      src={hero}
      priority
      alt="Screenshot of appointments in admin dashboard"
      className="max-h-95 rounded-lg lg:w-1/2"
    />
  );
}
