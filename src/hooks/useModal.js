import React from "react";

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
