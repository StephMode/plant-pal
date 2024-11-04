import GlobalStyle from "../styles";
import Image from "next/image";
import { useState } from "react";
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
      <header>
        <Image
          src={"/logo-main.svg"}
          width={200}
          height={50}
          alt={"rooted logo"}
        />
      </header>
      <Component
        {...pageProps}
        handleToggleOwned={handleToggleOwned}
        plants={allPlants}
      />
    </>
  );
}
