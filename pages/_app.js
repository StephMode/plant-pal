import GlobalStyle from "../styles";
import Image from "next/image";
import { plants as initialPlants } from "/lib/data";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import { nanoid } from 'nanoid';
import { useState, useEffect } from "react";


export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [plants, setPlants] = useLocalStorageState("plants", {
    defaultValue: initialPlants,
  });

  const [showModal, setShowModal] = useState(false);
  const [filteredPlants, setFilteredPlants] = useState(plants);
  const [showPlantFilterSection, setShowPlantFilterSection] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  function handleToggleOwned(id) {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, isOwned: !plant.isOwned } : plant
      )
    );
  }

  function handleAddPlant(newPlantData){
    const newPlant = {...newPlantData,  id: nanoid(), imageUrl: "https://images.unsplash.com/photo-1494516192674-b82b5f1e61dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
    setPlants([newPlant, ...plants ])
  }

  function handleDeletePlant(id) {
    setPlants((prevPlants) => 
      prevPlants.filter((plant) =>
        plant.id !== id)
    );

    setFilteredPlants((prevFilteredPlants) => 
      prevFilteredPlants.filter((plant) =>
        plant.id !== id)
    );

    router.push("/");
    setShowModal(!showModal);
  }

  function toggleFilterSection() {
    setShowPlantFilterSection(!showPlantFilterSection);
  }

  function handleFilterPlants(selectedFilter) {

    setFilteredPlants(plants);

    setFilteredPlants((filteredPlants) => 
      filteredPlants.filter((plant) =>
        plant.lightNeed === selectedFilter)
    );
  }

  function handleFilterPlantsReset() {
    setFilteredPlants(plants);
  }

  return (
    <>
      <GlobalStyle />
      <header>
        <Image src="/logo-main.svg" width={200} height={50} alt="rooted logo" />
      </header>
      <Component
        {...pageProps}
        handleToggleOwned={handleToggleOwned}
        plants={plants}
        onDeletePlant={handleDeletePlant}
        handleAddPlant={handleAddPlant}
        onFilterPlants={handleFilterPlants}
        onFilterPlantsReset={handleFilterPlantsReset}
        filteredPlants={filteredPlants}
        showPlantFilterSection={showPlantFilterSection}
        toggleFilterSection={toggleFilterSection}
        onToggleModal={handleToggleModal}
        showModal={showModal}
      />
    </>
  );
}
