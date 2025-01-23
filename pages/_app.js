import GlobalStyle from "../styles";
import "../fonts.css";
import Image from "next/image";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";
import { useEffect, useState, useRef } from "react";
import Navigation from "/components/Navigation";
import toast, { Toaster } from 'react-hot-toast';
import styled from "styled-components";
import { notes } from "/lib/noteData";
import useSWR, { SWRConfig} from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // SWR Configuration for tips
  const { data: tips, error: tipsError } = useSWR("/api/tips", fetcher);


  // SWR Configuration for plants
  const { data: fetchedPlants, error: plantsError, mutate } = useSWR("/api/plants", fetcher);

  const [plants, setPlants] = useLocalStorageState("plants", {
    defaultValue: [],
  });


  // Once the plant data has been successfully loaded, set it in State
  useEffect(() => {
    if (fetchedPlants) {
      setPlants(fetchedPlants);
    }
  }, [fetchedPlants, setPlants]);
  

  const intervalRef = useRef(null);
  // had to be set to zero because the fetch function is asynchronous and randomTip would therefore access data that is not yet available -> error message
  const [randomTip, setRandomTip] = useState(null);
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isReminder, setIsReminder] = useState(false);

  const initialFilterObject = {
    waterNeed: "",
    lightNeed: "",
    fertiliserSeason: [],
  };
  const [selectedFilter, setSelectedFilter] = useState(initialFilterObject);
  const [showPlantFilterSection, setShowPlantFilterSection] = useState(false);

  const testReminder = [
    { id: 1,
      plantName: "Snake Plant",
      task: "watering",
      date: "2024-11-29",
      relatedPlant: "1"
    },
    { id: 2,
      plantName: "Fiddle Leaf Fig",
      task: "fertilizing",
      date: "2024-12-05",
      relatedPlant: "2"
    },
    { id: 3,
      plantName: "Aloe Vera",
      task: "fertilizing",
      date: "2024-11-30",
      relatedPlant: "3"
    },
    { id: 4,
      plantName: "Spider Plant",
      task: "fertilizing",
      date: "2024-12-03",
      relatedPlant: "4"
    }
  ];
  
  const [reminders, setReminders] = useState(testReminder);


  const [currentDate, setCurrentDate] = useState(getDate());

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month}-${date}`;
  }

  useEffect(() => {
    const Interval = setInterval(() => {
      setCurrentDate(getDate());
    }, 10000);

    return () => clearInterval(Interval);
  }, []);


 // generate a random tip when tip data is loaded:
  useEffect(() => {
    if (tips && tips.length > 1) {
          const getRandomTip = () => {
            const randomIndex = Math.floor(Math.random() * tips.length);
            return tips[randomIndex];
          };
          setRandomTip(getRandomTip());
    }
  }, [tips]);


  useEffect(() => {
    const updateProgress = () => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          const getRandomTip = () => {
            const randomIndex = Math.floor(Math.random() * tips.length);
            return tips[randomIndex];
          };
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
  }, [isPaused, tips]);


  const handleMouseHover = () => {
    setIsPaused(true);
  };


  const handleMouseLeave = () => {
    setIsPaused(false);
  };


  const [searchQuery, setSearchQuery] = useState("");
  const [searchPage, setSearchPage] = useState(""); 
  const [searchResults, setSearchResults] = useState([]);
  const [noSearchResults, setNoSearchResults] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  // with mongoDB?
  function handleToggleOwned(id) {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, isOwned: !plant.isOwned } : plant
      )
    );
  }


  async function handleAddPlant(newPlantData) {

    const plantData = {
      ...newPlantData,
      imageUrl:
        "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };

    try {
      const response = await fetch("/api/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plantData),
      });
  
      if(response.ok) {
        mutate();
        router.push("/home");
      } else {
        console.error("Fehler beim Hinzufügen der Pflanze:", response.status, response.statusText);
        return;
      }
    } catch (error) {
        console.error("Netzwerkfehler:", error);
    }
  }


  // obsolete?
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
    } else if (buttonFunctionText === "Reminder") {
      setIsReminder(!isReminder);
    }
  }

  async function handleDeletePlant(id) {
    try {
        const response = await fetch(`/api/plants/${id}`, {
          method: "DELETE",
        });
    
        if(response.ok) {
          mutate();
          router.push("/home");
          setIsDelete(!isDelete);
          setShowModal(!showModal);
        } else {
          console.error("Fehler beim Löschen der Pflanze:", response.status, response.statusText);
          return;
        }
      } catch (error) {
          console.error("Netzwerkfehler:", error);
      }
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
        plant.name.toLowerCase().includes(searchQuery)
        || plant.botanicalName.toLowerCase().includes(searchQuery)
      );
      setSearchResults(queriedPlants);
      setNoSearchResults(queriedPlants.length === 0);
    } else if (searchPage === "tips") {
      const queriedTips = tips.filter((tip) => 
        tip.title.toLowerCase().includes(searchQuery)
        || tip.shortBodyContent.toLowerCase().includes(searchQuery)
      );
      setSearchResults(queriedTips);
      setNoSearchResults(queriedTips.length === 0);
    }
  }, [plants, searchPage, searchQuery]);

  function resetSearch() {
    setSearchResults([]);
    setNoSearchResults(false)
  }

  
// implement data in mongoDB Atlas
  const [notesData, setNotesData] = useLocalStorageState("notesData", {
    defaultValue: notes,
  });

  function handleDeleteNote(id) {
    setNotesData((prevnotes) => prevnotes.filter((note) => note.id !== id));
    toast.success("Note successfully deleted");
  }

  function WarningToast() {
    toast("Maximum of 5 notes per tip", {
      icon: "⚠️",
      style: {
        border: "1px solid #ffeeba",
        color: "#856404",
        backgroundColor: "#fff3cd",
      },
    });
  }

  function handleAddNote(routerQuery) {
    let noteAdded = false;

    setNotesData((prevnotes) => {
      const notesOnCurrentPage = prevnotes.filter(
        (note) => note.noteLocation === routerQuery
      );

      if (notesOnCurrentPage.length >= 5) {
        WarningToast();
        return prevnotes;
      } else noteAdded = true;

      const currentDate = new Date().toLocaleDateString();

      return [
        ...prevnotes,
        {
          id: nanoid(),
          headline: "Add Headline here",
          note: "Add note here",
          noteLocation: routerQuery,
          dateCreated: currentDate,
        },
      ];
    });

    if (noteAdded) {
      toast.success("Note successfully added");
    }
  }

  function handleEditNote(newPlantData, id, routerQuery) {
    setNotesData((prevnotes) =>
      prevnotes.map((note) =>
        note.id === id
          ? {
              ...note,
              headline: newPlantData.title,
              note: newPlantData.note,
              noteLocation: routerQuery,
            }
          : note
      )
    );
}
    
// also implement in mongoDB?
  function handleAddReminder(newReminderData, plantId, name) {
    const newReminder = {
      id: nanoid(),
      plantName: name,
      relatedPlant: plantId,
      ...newReminderData,
    };
    setReminders([newReminder, ...reminders]);
    router.push(`/plants/${plantId}`);
    setIsReminder(false);
    setShowModal(false);
  }

  function handleDeleteReminder(id, task) {
    setReminders((prevReminders) => prevReminders.filter((reminder) => reminder.id !== id));
    toast.success(`${task} completed`);

  }

  // error handling of SWR configuration
  // has to be positioned after every hook and state
  if (tipsError) return <div>Fehler beim Laden der Tipps</div>;
  if (!tips) return <div>Lade...</div>;

  if (plantsError) return <div>Fehler beim Laden der Pflanzen</div>;
  if (!fetchedPlants) return <div>Lade...</div>;

  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <header>
        <StyledLogoLink href="/">
          <Image
            src="/logo-main.svg"
            width={200}
            height={50}
            alt="rooted logo"
          />
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
        handleDeleteNote={handleDeleteNote}
        notesData={notesData}
        handleAddNote={handleAddNote}
        handleEditNote={handleEditNote}
        reminders={reminders}
        isReminder={isReminder}
        handleAddReminder={handleAddReminder}
        handleDeleteReminder={handleDeleteReminder}
      />
      <Toaster />
      <Navigation reminders={reminders} currentDate={currentDate}/>

    </SWRConfig>
  );
}

const StyledLogoLink = styled.a`
  display: flex;
`;
