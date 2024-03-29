import React from "react";
import styled from "styled-components";
import { FaGithub, FaPlay } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

import { Card } from "../shared/Card";
import { useModal } from "../hooks/useModal";
import { CardModal } from "../components/CardModal";

export const Project = ({ links, name, color, image, description, stack }) => {
  const { isModalOpen, closeModal, openModal } = useModal();

  return (
    <>
      <Card project whileHover={{ scale: 1.1 }}>
        <Header>
          <Title notInProgress={links} onClick={openModal}>
            {name}
          </Title>
          <List>
            {links.length > 1 ? (
              <React.Fragment>
                <Link target="_blank" href={links[0]}>
                  <FaGithub size={20} />
                </Link>
                <Link target="_blank" href={links[1]}>
                  <FaPlay size={20} />
                </Link>
              </React.Fragment>
            ) : (
              <InProgress>In progress</InProgress>
            )}
          </List>
        </Header>
        <Body>
          <Image color={color} src={image}></Image>
          <DescriptionButton onClick={openModal}>
            {description}
            <StackText>{stack}</StackText>
          </DescriptionButton>
        </Body>
      </Card>
      <AnimatePresence exitBeforeEnter>
        {isModalOpen && (
          <CardModal
            links={links}
            title={name}
            description={[description]}
            stack={stack}
            closeModal={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: ${(props) => (props.notInProgress ? props.theme.font : "#bebfc4")};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: 0.2s ease;
`;

const List = styled.div`
  display: flex;
  padding-left: 10px;
`;

const Link = styled.a`
  color: #ced1e0;
  margin-left: 15px;
  border-radius: 100%;
  transition: 0.1s ease;
  &:hover {
    color: #a8a9ad;
    cursor: pointer;
  }
  &:first-child {
    margin: 0;
  }
`;

const Body = styled.div`
  position: relative;
  height: 250px;
  width: 100%;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  overflow: hidden;
`;

const Image = styled.img`
  height: 250px;
  width: 100%;
  transition: 0.2s ease;
  border: 0;
  background: ${(props) => (props.image ? `url(${props.image})` : "orange")};
  &:hover {
    cursor: pointer;
  }
  &:hover + a,
  &:hover + span {
    display: block;
  }
`;

const DescriptionButton = styled.a`
  height: 250px;
  width: 100%;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  background: ${({ theme }) =>
    theme.background === "#000" ? "rgba(0,0,0,0.5)" : "transparent"};
  transition: 0.2s ease;
  padding: 20px;
  box-sizing: border-box;
  color: transparent;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
    color: white;
  }

  @media screen and (max-width: 700px) {
    background: rgba(0, 0, 0, 0.5);
    color: white;
  }
`;

const StackText = styled.span`
  font-weight: 500;
`;

const InProgress = styled.span`
  color: #bebfc4;
  font-weight: bold;
  white-space: nowrap;
`;
