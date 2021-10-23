import React from "react";
import { theme } from "../utils/theme";

export function useTheme() {
  const storageTheme = JSON.parse(localStorage.getItem("theme"));
  const [currentTheme, setCurrentTheme] = React.useState(
    storageTheme || theme.light
  );

  function toggleTheme() {
    setCurrentTheme((state) => {
      const newState = state === theme.light ? theme.dark : theme.light;
      localStorage.setItem("theme", JSON.stringify(newState));
      return newState;
    });
  }

  return { currentTheme, toggleTheme };
}
