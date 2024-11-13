import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&family=Playfair+Display:ital,wght@0,900;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&family=Playfair+Display:ital,wght@0,900;1,900&display=swap');

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
    width: 100%;
  }
  header {
    display: flex;
    padding: 5px 20px;
    height: 50px;
    background-color: var(--green-main);
  }
  h1 {
  font-family: 'Playfair Display', sans-serif;
  padding: 20px 10px;
  color: var(--green-main);
  }

 h2, h3, h4 {
  font-family: 'Assistant', sans-serif;
 }

 a {
  text-decoration: none;
  color: var(--black);
 }
 a:visited {
  color: var(--black);
 }

  header img {
    width: 150px;
    height: auto;
  }

  main {
    margin: 0 0 90px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  main ul {    
    gap: 16px;
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  ul, li {
    list-style: none;
  }
`;
