import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export function AnotherCard() {
  return (
    <Wrapper>
      <Image />
      <Container>
        <Title>Hello there</Title>
        <Description>
          <span>Some text about this app</span>
          <span>Or advantages of the app</span>
        </Description>
      </Container>
    </Wrapper>
  );
}

export const Wrapper = styled(motion.div)`
  width: 270px;
  height: 317px;
  background: white;
  border-radius: 16px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 10px;

  :hover img {
    height: 100px;
  }

  :hover span {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  background-size: cover;
  background-color: #57606f;
  transition: 0.2s ease;
`;

export const Container = styled.div`
  padding: 8px 14px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  span {
    transition: 0.2s ease;
    margin-top: 10px;
    opacity: 0;
  }
`;
