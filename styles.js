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
  width: 100%;
}

header {
  display: flex;
  padding: 5px 10px;
  height: 50px;
  background-color: var(--green-main);
  border-radius: 0 0 0px 22px;
  position: absolute;
  top: 0;
  z-index: 30;
  width: 100%;
}

h1 {
font-family: 'Playfair Display', sans-serif;
padding: 0;
position: absolute;
top: 0;
right: 10px;
color: var(--white);
z-index: 40;
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
  width: 125px;
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
svg{
  transition: filter ease-in-out 0.5s;
}
svg:hover {
  filter: brightness(0.7);
}
nav svg:hover {
  filter: brightness(1);
}
`;
