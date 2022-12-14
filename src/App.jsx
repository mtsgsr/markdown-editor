import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { lightTheme, darkTheme } from "./styles/themes";
import { FileStorage } from "./context/FileContext";
import Header from "./components/Header";
import Markdown from "./components/Markdown";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <FileStorage>
        <GlobalStyle />
        <Header />
        <Markdown />
      </FileStorage>
    </ThemeProvider>
  );
}

export default App;
