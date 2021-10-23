import styled from "styled-components";
import { motion } from "framer-motion";

export function Card(props) {
  return props.isAnimate ? (
    <CardWithAnimations {...props} />
  ) : (
    <DefaultCard {...props} />
  );
}

const DefaultCard = styled(motion.div)`
  background: ${(props) => props.theme.card};
  border-radius: 16px;
  display: flex;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
  margin: 10px;
  transition: 0.2s ease;
  padding: ${(props) => (props.project ? "0" : "20px")};
  width: ${(props) => (props.wide ? "560px" : "270px")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => (props.user ? "space-between" : "flex-start")};
  cursor: pointer;

  @media (${({ theme }) => theme.screen.tablet}) {
    flex-direction: column;
    width: 95vw;
  }
`;

const CardWithAnimations = styled(DefaultCard).attrs({
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
})``;
