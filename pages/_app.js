import GlobalStyle from "../styles";
import Image from "next/image";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <GlobalStyle />
      <StyledHeader>
        <Image 
          src={"/logo-main.svg"}
          width={150}
          height={30}
          alt={"rooted logo"}
        />
      </StyledHeader>
      <Component {...pageProps} />
    </>
  );
}


const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  background-color: var(--green-main);
`;