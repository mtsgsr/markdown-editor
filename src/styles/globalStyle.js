import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::after, *::before{
    box-sizing: border-box;
  }
  html, body{
    margin: 0;
    padding: 0;
  }
  body{
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-rendering: optimizeLegibility;
  }
`;
