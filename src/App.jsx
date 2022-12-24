import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { lightTheme, darkTheme } from "./styles/themes";
import { FileStorage } from "./context/FileContext";
import Header from "./components/Header";
import Markdown from "./components/Markdown";
import { lang, changeLang } from "./languages";

/* DEFINE LANGUAGE ON PAGE LOAD */
if (typeof window !== "undefined") {
  changeLang();
}
/* ----------------------- */

function App() {
  const [theme, setTheme] = React.useState(lightTheme);

  React.useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme(darkTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <FileStorage>
        <GlobalStyle />
        <Header />
        <Markdown />
      </FileStorage>
    </ThemeProvider>
  );
}

export default App;
