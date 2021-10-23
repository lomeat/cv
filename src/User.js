import React from "react";
import styled from "styled-components";
import { FaTelegramPlane, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import Tooltip from "react-tooltip";
import { AnimatePresence } from "framer-motion";

import { Card } from "./Card";
import { AvatarModal } from "./AvatarModal";

export const User = ({ name, profession, avatar }) => {
  const [isAvatarOpen, setIsAvatarOpen] = React.useState(false);

  const toggleAvatarOpen = () => {
    setIsAvatarOpen((state) => !state);
  };

  return (
    <Card wide row user>
      <InfoWrapper>
        <Img
          data-tip
          data-for="avatar"
          src={avatar}
          onClick={toggleAvatarOpen}
        />
        <Tooltip effect="solid" id="avatar">
          Click me :)
        </Tooltip>
        <Info>
          <Name>{name}</Name>
          <Professioon>{profession}</Professioon>
        </Info>
      </InfoWrapper>

      <AnimatePresence exitBeforeEnter>
        {isAvatarOpen && (
          <AvatarModal toggleAvatarOpen={toggleAvatarOpen} avatar={avatar} />
        )}
      </AnimatePresence>

      <List>
        <Link
          data-tip
          data-for="phone"
          target="_blank"
          href="tel:+375333362025"
          style={{ marginRight: "-4px" }}
        >
          <FaPhone size={28} />
        </Link>
        <Tooltip id="phone" place="top" effect="solid">
          Phone: +375 (33) 336-20-25
        </Tooltip>

        <Link
          data-tip
          data-for="telegram"
          target="_blank"
          href="https://t.me/lomeat"
        >
          <FaTelegramPlane size={30} />
        </Link>
        <Tooltip id="telegram" place="top" effect="solid">
          Telegram: @lomeat
        </Tooltip>

        <Link
          data-tip
          data-for="github"
          target="_blank"
          href="https://github.com/lomeat"
        >
          <FaGithub size={30} />
        </Link>
        <Tooltip id="github" place="top" effect="solid">
          GitHub: lomeat
        </Tooltip>

        <Link
          data-tip
          data-for="email"
          target="_blank"
          href="mailto:lom3at@gmail.com"
        >
          <FaEnvelope size={30} />
        </Link>
        <Tooltip id="email" place="top" effect="solid">
          Email: lom3at@gmail.com
        </Tooltip>
      </List>
    </Card>
  );
};

const InfoWrapper = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 10px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-size: 24px;
`;

const Professioon = styled.div`
  padding-top: 5px;
  font-size: 16px;
  font-weight: 400;
  @media screen and (max-width: 700px) {
    padding: 10px 0;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Link = styled.a`
  width: 40px;
  height: 40px;
  margin-left: 20px;
  border-radius: 100%;
  transition: 0.1s ease;
  color: ${(props) => props.theme.icon};
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #a8a9ad;
  }
`;
