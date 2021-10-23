import React from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import { Card } from "./Card";
import { useModal } from "./utils";
import { CardModal } from "./CardModal";

export const Work = ({ work }) => {
  const title = work[0];
  const modal = work[1];
  const data = work.slice(2, work.length);
  const { isModalOpen, closeModal, openModal } = useModal();

  return (
    <>
      <Card wide onClick={openModal} isAnimate>
        <Header>{title}</Header>
        <List>
          {data.map((a) => (
            <Li key={a.name}>
              <strong>{a.name}:</strong> {a.value}
            </Li>
          ))}
        </List>
      </Card>
      <AnimatePresence exitBeforeEnter>
        {isModalOpen && <CardModal {...modal} closeModal={closeModal} />}
      </AnimatePresence>
    </>
  );
};

const Header = styled.h2`
  padding: 0 0 10px 0;
  margin: 0;
  font-size: 24px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 20px;
  margin: 0;
`;

const Li = styled.li`
  padding: 4px 0;
`;
