import GlobalStyle from "../styles";
import plants from "@/lib/data";
import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  const [initialPlants, setInitialPlants] = useState(plants);


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
      <Component {...pageProps} plants={initialPlants} />
    </>
  );
}


const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  background-color: var(--green-main);
`;