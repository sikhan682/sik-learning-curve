import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global/GlobalStyle";
import { darkTheme } from "../../styles/global/theme";

function AppProviders({ children }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default AppProviders;
