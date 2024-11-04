import GlobalStyle from "../styles";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import plants from "@/lib/data";

export default function App({ Component, pageProps }) {
  const [allPlants, setAllPlants] = useState(plants);

  function handleToggleOwned(id) {
    // setPlants(...plants, id{...id; is});
    setAllPlants(
      allPlants.map((plant) =>
        plant.id === id ? { ...plant, isOwned: !plant.isOwned } : plant
      )
    );
  }

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
      <Component
        {...pageProps}
        handleToggleOwned={handleToggleOwned}
        plants={allPlants}
      />
    </>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  background-color: var(--green-main);
`;
