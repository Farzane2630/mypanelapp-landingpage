"use client";

import { useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const themeSwitchHandler = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      name="theme switcher"
      aria-label="theme switcher button"
      onClick={themeSwitchHandler}
    >
      {theme === "light" ? "🌙" : " ⭐"}
    </button>
  );
}
