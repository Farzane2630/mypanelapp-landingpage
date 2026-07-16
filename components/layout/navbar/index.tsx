import Actions from "./actions/actions";
import Logo from "../../shared/logo";
import Navigation from "./navigation";

export default function Navbar() {
  return (
    <header className="flex w-full items-center justify-between gap-x-2 px-4 py-4">
      <Logo />
      <div className="hidden w-full sm:flex">
        <Navigation />
      </div>
      <Actions />
    </header>
  );
}
