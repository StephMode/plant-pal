import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --gold: #FFBA00;
    --gold-dark: #CE9605;
    --green-main: #0C3B2E;
    --green-main-dark: #08281F;
    --green-light: #6D9773;
    --green-light-dark: #4B684F;
    --brown: #BB8A52;
    --brown-dark: #86643E;
    --white: #FBfBfB;
    --white-dark: #cacaca;
    --black: #010F0B;
    --gray: #D2D5D2;
    --gray-dark: #808080;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    font-family: system-ui;
    display: flex;
    justify-content: center;
  }

  ul, li {
    list-style: none;
  }
`;
