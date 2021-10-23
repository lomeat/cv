import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { useModal } from "../hooks/useModal";
import { CardModal } from "../components/CardModal";

export function AnotherCard({ name, image, description, stack }) {
  const { isModalOpen, closeModal, openModal } = useModal();
  const modalName = name.split(" ")[0];

  return (
    <>
      <Wrapper onClick={openModal} whileHover={{ scale: 1.1 }}>
        <Image src={image} />
        <Container>
          <Title>{name}</Title>
          <Description>
            <span>{description}</span>
            <strong>{stack}</strong>
          </Description>
        </Container>
      </Wrapper>
      <AnimatePresence exitBeforeEnter>
        {isModalOpen && (
          <CardModal
            title={modalName}
            closeModal={closeModal}
            description={[description]}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ src }) => src});
  background-size: 100%;
  background-color: #57606f;
  transition: 0.2s ease;
  filter: ${({ theme }) =>
    theme.background === "#000" ? "invert(1)" : "none"};
`;

export const Wrapper = styled(motion.div)`
  width: 270px;
  height: 270px;
  background: white;
  border-radius: 16px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 10px;
  cursor: pointer;

  :hover ${Image} {
    height: 100px;
    filter: opacity(0.5)
      ${({ theme }) => (theme.background === "#000" ? "invert(1)" : "")};
  }

  :hover span {
    opacity: 1;
  }

  :hover h3 {
    color: ${({ theme }) => theme.font};
    margin: 6px 0 0 0;
  }
`;

export const Container = styled.div`
  padding: 8px 14px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.card};
`;

export const Title = styled.h3`
  padding: 0;
  width: 100%;
  transition: 0.2s ease;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 140px;
  padding-bottom: 20px;

  span {
    transition: 0.2s ease;
    margin-top: 10px;
    opacity: 0;
  }
`;
