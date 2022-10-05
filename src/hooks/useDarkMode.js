import { useCallback, useEffect, useState } from "react";

export default function useDarkMode() {
  // initial colorscheme detection
  const [isLightMode, setIsLightMode] = useState(false);

  // watching for colorscheme change detection
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      setIsLightMode(e.matches ? false : true);
    });

  // Toggle for change theme
  const onChangeTheme = useCallback(() => {
    const value = !isLightMode;
    setIsLightMode((v) => !v);
    localStorage.setItem("THEME", value ? "LIGHT" : "DARK"); // Value for THEME is only LIGHT or DARK
  }, [isLightMode]);

  // initial colorscheme detection
  useEffect(() => {
    // Check if browser support with localstorage or not
    if (typeof Storage !== undefined) {
      const theme = localStorage.getItem("THEME");
      if (theme === null) {
        setIsLightMode(false);
      } else {
        setIsLightMode(theme === "DARK" ? false : true);
      }
    } else {
      console.warn("Sorry, No Web Storage support....!");
    }
  }, []);

  return { isLightMode, onChangeTheme };
}
