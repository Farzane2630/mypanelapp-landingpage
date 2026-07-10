import Actions from "./actions/actions";
import Logo from "../../shared/logo";
import Navigation from "./navigation";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 w-full gap-x-4">
      <Logo />
      <Navigation />
      <Actions />
    </header>
  );
}
