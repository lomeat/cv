import React from "react";
import styled from "styled-components";

export const Layout = ({ direction, children }) => (
  <StLayout direction={direction}>{children}</StLayout>
);

const StLayout = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
`;
