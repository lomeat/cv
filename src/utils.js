import React from "react";

import { theme } from "./theme";

const API = "https://api.npoint.io/04045c1e2e27829626fc";

export async function getData() {
  const res = await fetch(API);
  return await res.json();
}

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

export function useModal() {
  const [isModalOpen, setModalOpen] = React.useState(false);

  function closeModal() {
    setModalOpen(false);
  }

  function openModal() {
    setModalOpen(true);
  }

  function toggleModal() {
    setModalOpen((state) => !state);
  }

  return { isModalOpen, closeModal, openModal, toggleModal };
}
