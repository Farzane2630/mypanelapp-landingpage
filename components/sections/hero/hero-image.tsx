import Image from "next/image";
import dashboard from "@/public/images/hero.webp";
export default function HeroImage() {
  return (
    <Image src={dashboard} priority alt="Dashboard" width={1200} height={700} />
  );
}
