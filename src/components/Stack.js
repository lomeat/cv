import React from "react";
import styled from "styled-components";

import { Card } from "../shared/Card";

export const Stack = ({ stack }) => {
  return (
    <Card>
      <NameWrapper>
        <Count>{stack.length}</Count>
        <Name>Stack</Name>
      </NameWrapper>
      <TagsWrapper>
        {stack.map((value) => (
          <Tag key={value.title} target="_blank" href={value.href}>
            {value.title}
          </Tag>
        ))}
      </TagsWrapper>
    </Card>
  );
};

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Count = styled.div`
  color: ${(props) => props.theme.countFont};
  padding: 4px 14px;
  background: ${(props) => props.theme.countBack};
  border-radius: 20px;
`;

const Name = styled.h2`
  font-size: 24px;
  padding: 0;
  padding-left: 10px;
  margin: 0;
`;

const TagsWrapper = styled.div`
  display: flex;
  padding-top: 20px;
  flex-wrap: wrap;
`;

const Tag = styled.a`
  color: ${(props) => props.theme.tagFont};
  font-weight: 500;
  background: ${(props) => props.theme.tagBack};
  border-radius: 20px;
  padding: 8px 20px;
  margin: 0 10px 10px 0;
  transition: 0.2s ease;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    background: #2f73ff;
    cursor: pointer;
  }
`;
