import React from "react";
import styled from "styled-components";

export const AvatarModal = ({ avatar, toggleAvatarOpen }) => (
  <Modal onClick={toggleAvatarOpen}>
    <AvatarImg src={avatar} />
  </Modal>
);

const AvatarImg = styled.img`
  width: 500px;
  height: 500px;

  @media screen and (max-width: 700px) {
    width: 95vw;
  }
`;

const Modal = styled.div`
  position: fixed;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  cursor: pointer;
`;
