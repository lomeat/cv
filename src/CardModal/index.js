import React from "react";

import * as S from "./styles";

const outerVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const modalVariants = {
  open: {
    scale: 1,
    opacity: 1,
  },
  close: {
    scale: 0,
    opacity: 1,
  },
};

export function CardModal({ closeModal, image, title }) {
  return (
    <S.OuterBound
      onClick={closeModal}
      variants={outerVariants}
      animate="visible"
      initial="hidden"
      exit="hidden"
      transition={{ duration: 0.3 }}
    >
      <S.Modal
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        animate="open"
        initial="close"
        exit="close"
        transition={{ duration: 0.3 }}
      >
        <S.Image src={"https://i.imgur.com/ph2hjOe.jpeg" || image} />
        <S.Container>
          <S.Title>{title}</S.Title>
          <S.P>Something text here, guys!</S.P>
        </S.Container>
      </S.Modal>
    </S.OuterBound>
  );
}
