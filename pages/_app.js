import GlobalStyle from "../styles";
import "../fonts.css";
import Image from "next/image";
import { plants as initialPlants } from "/lib/plantData";
import { tips } from "/lib/tipData";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";
import { useEffect, useState, useRef } from "react";
import Navigation from "/components/Navigation";
import { Toaster } from 'react-hot-toast';
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [plants, setPlants] = useLocalStorageState("plants", {
    defaultValue: initialPlants,
  });
  /*---------------------------------------------------------------------- */
  const intervalRef = useRef(null);
  const [randomTip, setRandomTip] = useState(tips[1]);
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);

  const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
  };

  useEffect(() => {
    const updateProgress = () => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          setRandomTip(getRandomTip());
          return 100;
        }
        return prevProgress - 0.5;
      });
    };

    if (!isPaused) {
      intervalRef.current = setInterval(updateProgress, 50);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const handleMouseHover = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  /*---------------------------------------------------------------------- */
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const initialFilterObject = {
    waterNeed: "",
    lightNeed: "",
    fertiliserSeason: [],
  };
  const [selectedFilter, setSelectedFilter] = useState(initialFilterObject);

  const [showPlantFilterSection, setShowPlantFilterSection] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchPage, setSearchPage] = useState(""); 
  const [searchResults, setSearchResults] = useState([]);
  const [noSearchResults, setNoSearchResults] = useState(false);

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
    const newPlant = {
      ...newPlantData,
      id: nanoid(),
      imageUrl:
        "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
    setPlants([newPlant, ...plants]);
    router.push(`/home`);
  }

  function handleEditPlant(newPlantData, id) {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id
          ? {
              ...plant,
              name: newPlantData.name,
              botanicalName: newPlantData.botanicalName,
              description: newPlantData.description,
              lightNeed: newPlantData.lightNeed,
              waterNeed: newPlantData.waterNeed,
              fertiliserSeason: newPlantData.fertiliserSeason,
            }
          : plant
      )
    );
    router.push(`/plants/${id}`);
    setIsEdit(false);
    setShowModal(false);
  }

  function handleToggleModal(buttonFunctionText) {
    setShowModal(!showModal);
    if (buttonFunctionText === "Edit") {
      setIsEdit(!isEdit);
    } else if (buttonFunctionText === "Delete") {
      setIsDelete(!isDelete);
    }
  }

  function handleDeletePlant(id) {
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));

    router.push(`/home`);
    setIsDelete(!isDelete);
    setShowModal(!showModal);
  }

  function handleFilterPlants(selectedFilterKey, selectedFilterValue) {
    if (
      selectedFilterKey === "waterNeed" ||
      selectedFilterKey === "lightNeed"
    ) {
      setSelectedFilter({
        ...selectedFilter,
        [selectedFilterKey]: selectedFilterValue,
      });
    }

    if (selectedFilterKey === "fertiliserSeason") {
      if (
        selectedFilter.fertiliserSeason &&
        selectedFilter.fertiliserSeason.includes(selectedFilterValue)
      ) {
        setSelectedFilter((prevSelectedFilter) => ({
          ...prevSelectedFilter,
          [selectedFilterKey]: prevSelectedFilter.fertiliserSeason.filter(
            (season) => season !== selectedFilterValue
          ),
        }));
      } else {
        setSelectedFilter({
          ...selectedFilter,
          [selectedFilterKey]: [
            ...new Set([
              ...selectedFilter[selectedFilterKey],
              selectedFilterValue,
            ]),
          ],
        });
      }
    }
  }

  const filterablePlants = searchResults.length > 0 ? searchResults : plants;
  const filteredPlants = selectedFilter
    ? filterablePlants.filter(
        (plant) =>
          (!selectedFilter.lightNeed ||
            plant.lightNeed === selectedFilter.lightNeed) &&
          (!selectedFilter.waterNeed ||
            plant.waterNeed === selectedFilter.waterNeed) &&
          (!selectedFilter.fertiliserSeason ||
            selectedFilter.fertiliserSeason.every((season) =>
              plant.fertiliserSeason.includes(season)
            ))
      )
    : plants;

  function handleFilterPlantsReset(event) {
    event.preventDefault();
    setSelectedFilter(initialFilterObject);
    event.target.reset();
  }

  function toggleFilterSection() {
    setShowPlantFilterSection(!showPlantFilterSection);
  }

  function handleSearchQuery(searchInput, searchFor) {
    setSearchQuery(searchInput);
    setSearchPage(searchFor);
  }
   
  useEffect(() => {
    if (searchPage === "plants") {
      const queriedPlants = plants.filter((plant) => 
        plant.name.includes(searchQuery) 
        || plant.name.toLowerCase().includes(searchQuery)
        || plant.botanicalName.includes(searchQuery) 
        || plant.botanicalName.toLowerCase().includes(searchQuery)     
      );
      setSearchResults(queriedPlants);
      setNoSearchResults(queriedPlants.length === 0);
    } else if (searchPage === "tips") {
      const queriedTips = tips.filter((tip) => 
        tip.title.includes(searchQuery) 
        || tip.title.toLowerCase().includes(searchQuery)
        || tip.shortBodyContent.includes(searchQuery) 
        || tip.shortBodyContent.toLowerCase().includes(searchQuery)
      );
      setSearchResults(queriedTips);
      setNoSearchResults(queriedTips.length === 0);
    }
  }, [searchQuery, searchPage]);

  function resetSearch() {
    setSearchResults([]);
    setNoSearchResults(false)
  }

  
  return (
    <>
      <GlobalStyle />
      <header>
        <StyledLogoLink href="/">
          <Image src="/logo-main.svg" width={200} height={50} alt="rooted logo" />
        </StyledLogoLink>
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
        progress={progress}
        handleMouseHover={handleMouseHover}
        handleMouseLeave={handleMouseLeave}
        handleSearchQuery={handleSearchQuery}
        searchResults={searchResults}
        resetSearch={resetSearch}
        noSearchResults={noSearchResults}
      />
      <Toaster/>
      <Navigation />
    </>
  );
}

const StyledLogoLink = styled.a`
  display: flex;
`;