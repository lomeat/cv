import React from "react";
import styled from "styled-components";
import { FaMoon } from "react-icons/fa";
import Tooltip from "react-tooltip";

import { Card } from "../shared/Card";

export const UtilityButtons = ({ toggleTheme }) => {
  return (
    <Card row style={{ width: "90px", justifyContent: "center" }}>
      <Button data-tip data-for="theme" onClick={toggleTheme}>
        <FaMoon size={30} />
      </Button>
      <Tooltip id="theme" effect="solid">
        Toggle dark/light theme
      </Tooltip>
    </Card>
  );
};

const Button = styled.button`
  transition: 0.1s ease;
  color: ${(props) => props.theme.icon};
  display: flex;
  align-items: center;
  border: 0;
  background: transparent;
  cursor: pointer;
  &:hover {
    color: #a8a9ad;
  }
`;
