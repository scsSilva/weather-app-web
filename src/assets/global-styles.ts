import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto', sans-serif;
  };

  body {
    height: 100%;
    width: 100%;
    background-color: #1e272e;
  }
`;

export default GlobalStyles;
