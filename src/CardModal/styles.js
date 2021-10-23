import styled from "styled-components";
import { motion } from "framer-motion";

export const OuterBound = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const Modal = styled(motion.div)`
  width: 500px;
  height: 800px;
  border-radius: 20px;
  overflow: hidden;
  background: white;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
`;

export const Image = styled.img`
  background-size: cover;
  background: url(${({ src }) => src});
  background-color: #2f3542;
  width: 100%;
  height: 200px;
`;

export const Title = styled.h2`
  position: absolute;
  top: -100px;
  left: 20px;
  color: white;
  z-index: 6;
  text-transform: uppercase;
  font-size: 60px;
`;

export const P = styled.p``;
