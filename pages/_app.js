import GlobalStyle from "../styles";
import Image from "next/image";
import plants from "@/lib/data";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [allPlants, setAllPlants] = useLocalStorageState("allPlants", {
    defaultValue: plants,
  });

  console.log(allPlants);

  function handleToggleOwned(id) {
    setAllPlants((prevPlants) =>
      prevPlants.map((plant) =>
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
        // ownedPlants={ownedPlants}
      />
    </>
  );
}
