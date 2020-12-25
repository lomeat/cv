import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import { App } from "./App";

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e9ebf2;
    flex-direction: column;
  }

  * {
    box-sizing: border-box;
    user-select: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
