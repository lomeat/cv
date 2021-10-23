import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const outerVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const avatarVariants = {
  open: {
    scale: 1,
    opacity: 1,
    borderRadius: "0%",
    top: "50%",
    left: "50%",
    marginTop: "-250px",
    marginLeft: "-250px",
  },
  close: {
    scale: 0,
    opacity: 1,
    borderRadius: "100%",
    top: -80,
    left: 200,
  },
};

export const AvatarModal = ({ avatar, toggleAvatarOpen }) => (
  <OuterBound
    onClick={toggleAvatarOpen}
    variants={outerVariants}
    animate="visible"
    initial="hidden"
    exit="hidden"
  >
    <AvatarImg
      src={avatar}
      variants={avatarVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      animate="open"
      initial="close"
      exit="close"
    />
  </OuterBound>
);

const AvatarImg = styled(motion.img)`
  width: 500px;
  height: 500px;
  position: absolute;

  @media screen and (max-width: 700px) {
    width: 95vw;
  }
`;

const OuterBound = styled(motion.div)`
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
