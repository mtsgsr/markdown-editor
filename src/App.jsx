import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { lightTheme, darkTheme } from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
