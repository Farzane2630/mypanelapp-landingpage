import React from "react";
// import ThemeSwitcher from "./themeSwitcher";
import LanguageSwitcher from "./languageSwitcher";
import GetStarted from "./getStarted";

export default function Actions() {
  return (
    <div className="flex items-center gap-x-2">
      {/* <ThemeSwitcher /> */}
      <GetStarted className="flex sm:hidden" />
      <LanguageSwitcher />
    </div>
  );
}
