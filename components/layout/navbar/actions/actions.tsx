import React from "react";
import ThemeSwitcher from "./themeSwitcher";
import LanguageSwitcher from "./languageSwitcher";
import GetStarted from "./getStarted";

export default function Actions() {
  return (
    <div className="w-40 flex gap-x-2 items-center">
      <ThemeSwitcher />
      <LanguageSwitcher />
      <GetStarted />
    </div>
  );
}
