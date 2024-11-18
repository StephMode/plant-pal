import GlobalStyle from "../styles";
import "../fonts.css"
import Image from "next/image";
import { plants as initialPlants } from "/lib/plantData";
import { tips } from "/lib/tipData";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import { nanoid } from 'nanoid';
import { useEffect, useState } from "react";
import Navigation from "/components/Navigation";


export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [plants, setPlants] = useLocalStorageState("plants", {
    defaultValue: initialPlants,
  });
/*---------------------------------------------------------------------- */
  const [randomTip, setRandomTip] = useState("");
  const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
  };
  useEffect(() => {setRandomTip(getRandomTip());},[])
/*---------------------------------------------------------------------- */
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("");
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

  function handleAddPlant(newPlantData) {
    const newPlant = { ...newPlantData, id: nanoid(), imageUrl: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    setPlants([newPlant, ...plants])
    router.push(`/`);
  }

  function handleEditPlant(newPlantData, id) {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, name: newPlantData.name, botanicalName: newPlantData.botanicalName, description: newPlantData.description, lightNeed: newPlantData.lightNeed, waterNeed: newPlantData.waterNeed, fertiliserSeason: newPlantData.fertiliserSeason } : plant
      )
    );
    router.push(`/plants/${id}`);
    setIsEdit(false)
    setShowModal(false);
  }

  function handleToggleModal(buttonFunctionText) {
    setShowModal(!showModal);
    if (buttonFunctionText === "Edit") {
      setIsEdit(!isEdit)
    } else if (buttonFunctionText === "Delete") {
      setIsDelete(!isDelete)
    }
  }

  function handleDeletePlant(id) {
    setPlants((prevPlants) =>
      prevPlants.filter((plant) =>
        plant.id !== id)
    );

    router.push("/");
    setIsDelete(!isDelete)
    setShowModal(!showModal);
  }

  function toggleFilterSection() {
    setShowPlantFilterSection(!showPlantFilterSection);
  }

  function handleFilterPlants(selectedFilter) {
    setSelectedFilter(selectedFilter);
  }

  const filteredPlants = selectedFilter 
   ? plants.filter((plant) => 
      plant.lightNeed === selectedFilter) 
   : plants;


  function handleFilterPlantsReset() {
    setSelectedFilter("");
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
        tips={tips}
        randomTip={randomTip}
        onDeletePlant={handleDeletePlant}
        handleAddPlant={handleAddPlant}
        handleEditPlant={handleEditPlant}
        handleToggleModal={handleToggleModal}
        showModal={showModal}
        isEdit={isEdit}
        isDelete={isDelete}
        onFilterPlants={handleFilterPlants}
        onFilterPlantsReset={handleFilterPlantsReset}
        selectedFilter={selectedFilter}
        filteredPlants={filteredPlants}
        showPlantFilterSection={showPlantFilterSection}
        toggleFilterSection={toggleFilterSection}
      />
      <Navigation />
    </>
  );
}
