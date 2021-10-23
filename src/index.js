import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import WebFont from "webfontloader";
import "normalize.css";
import { QueryClient, QueryClientProvider } from "react-query";

import { App } from "./components/App";

WebFont.load({
  google: {
    families: ["Roboto:400,500,700"],
  },
});

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    user-select: none;
    font-family: "Roboto", sans-serif;
    outline: none;
  }
`;

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
