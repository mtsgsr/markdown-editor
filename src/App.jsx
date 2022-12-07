import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { lightTheme, darkTheme } from "./styles/themes";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <GlobalStyle />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
