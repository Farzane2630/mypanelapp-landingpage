import GetStarted from "@/components/layout/navbar/actions/getStarted";
import Link from "next/link";

export default function HeroActions() {
  return (
    <div>
      <GetStarted />
      <Link target="_blank" href="https://mypanelapp.ir/admin-1">
        Live Demo
      </Link>
    </div>
  );
}
