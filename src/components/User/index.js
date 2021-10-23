import React from "react";
import { FaTelegramPlane, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import Tooltip from "react-tooltip";
import { AnimatePresence } from "framer-motion";

import { Card } from "../../shared/Card";
import { AvatarModal } from "./AvatarModal";
import { useModal } from "../../hooks/useModal";
import * as S from "./styles";

export const User = ({ name, profession, avatar }) => {
  const { isModalOpen, toggleModal } = useModal();

  return (
    <Card wide row user>
      <S.InfoWrapper>
        <S.Img data-tip data-for="avatar" src={avatar} onClick={toggleModal} />
        <Tooltip effect="solid" id="avatar">
          Click me :)
        </Tooltip>
        <S.Info>
          <S.Name>{name}</S.Name>
          <S.Professioon>{profession}</S.Professioon>
        </S.Info>
      </S.InfoWrapper>

      <AnimatePresence exitBeforeEnter>
        {isModalOpen && (
          <AvatarModal toggleModal={toggleModal} avatar={avatar} />
        )}
      </AnimatePresence>

      <S.List>
        <S.Link
          data-tip
          data-for="phone"
          target="_blank"
          href="tel:+375333362025"
          style={{ marginRight: "-4px" }}
        >
          <FaPhone size={28} />
        </S.Link>
        <Tooltip id="phone" place="top" effect="solid">
          Phone: +375 (33) 336-20-25
        </Tooltip>

        <S.Link
          data-tip
          data-for="telegram"
          target="_blank"
          href="https://t.me/lomeat"
        >
          <FaTelegramPlane size={30} />
        </S.Link>
        <Tooltip id="telegram" place="top" effect="solid">
          Telegram: @lomeat
        </Tooltip>

        <S.Link
          data-tip
          data-for="github"
          target="_blank"
          href="https://github.com/lomeat"
        >
          <FaGithub size={30} />
        </S.Link>
        <Tooltip id="github" place="top" effect="solid">
          GitHub: lomeat
        </Tooltip>

        <S.Link
          data-tip
          data-for="email"
          target="_blank"
          href="mailto:lom3at@gmail.com"
        >
          <FaEnvelope size={30} />
        </S.Link>
        <Tooltip id="email" place="top" effect="solid">
          Email: lom3at@gmail.com
        </Tooltip>
      </S.List>
    </Card>
  );
};
