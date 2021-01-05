import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import WebFont from "webfontloader";

import { App } from "./App";

WebFont.load({
  google: {
    families: ["Roboto:400,500,700"],
  },
});

const GlobalStyle = createGlobalStyle`
  body {
   padding: 0;
   margin: 0;
  }

  * {
    box-sizing: border-box;
    user-select: none;
    font-family: "Roboto", sans-serif;
    outline: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
