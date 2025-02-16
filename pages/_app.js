import GlobalStyle from "../styles";
import "../fonts.css";
import Image from "next/image";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import Navigation from "/components/Navigation";
import toast, { Toaster } from 'react-hot-toast';
import styled from "styled-components";
import useSWR, { SWRConfig} from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const { data: tips, error: tipsError } = useSWR("/api/tips", fetcher);

  const { data: notes, error: notesError, mutate: mutateNotes } = useSWR("/api/notes", fetcher);

  const { data: reminders, error: remindersError, mutate: mutateReminders } = useSWR("/api/reminders", fetcher);

  const { data: fetchedPlants, error: plantsError, mutate: mutatePlants } = useSWR("/api/plants", fetcher);

  // we should keep the state:
  // If we don't store plants in a state it may be that plants is not defined or available at the time we try to access it
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


 // generate random tip when tip data is loaded:
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


  async function handleToggleOwned(id) {
    try {
      const response = await fetch(`/api/plants/${id}`);
      if (!response.ok) {
        console.error("An error occured while trying to get plants data", response.status, response.statusText);
        return;
      }
  
      const plantData = await response.json();
      const isOwned = plantData.isOwned;
  
      const isOwnedUpdatedPlant = {
        isOwned: !isOwned
      }

      const updateResponse = await fetch(`/api/plants/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(isOwnedUpdatedPlant),
      });

      if(updateResponse.ok) {
        mutatePlants();
      } else {
        console.error("An error occurred while clicking the favourite Button:", response.status, response.statusText);
        return;
      }
    } catch(error) {
      console.error("Network error:", error);
    }
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
        mutatePlants();
        router.push("/home");
      } else {
        console.error("An error occurred while adding the plant:", response.status, response.statusText);
        return;
      }
    } catch (error) {
        console.error("Network error:", error);
    }
  }


  async function handleEditPlant(newPlantData, id) {

    try {
      const response = await fetch(`/api/plants/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlantData),
      });
  
      if(response.ok) {
        mutatePlants();
        router.push(`/plants/${id}`);
        setIsEdit(false);
        setShowModal(false);
      } else {
        console.error("An error occurred while changing plant data:", response.status, response.statusText);
        return;
      }
    } catch (error) {
        console.error("Network error:", error);
    }
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
          mutatePlants();
          router.push("/home");
          setIsDelete(!isDelete);
          setShowModal(!showModal);
        } else {
          console.error("An error occurred while deleting the plant:", response.status, response.statusText);
          return;
        }
      } catch (error) {
          console.error("Network error:", error);
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


  async function handleAddNote(routerQuery) {
    const newNoteData = {
      headline: "Add Headline here",
      note: "Add note here",
      noteLocation: routerQuery,
      dateCreated: new Date().toLocaleDateString(),
    };

    const everyTipNote = notes.filter((note) => {
      return note.noteLocation === routerQuery;
  });
  
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNoteData),
      });
  
      if (response.ok && everyTipNote.length < 5) {
        mutateNotes();
        toast.success("Note successfully added");
      } else if (response.ok && everyTipNote.length >= 5) {
        WarningToast();
        return;
      } else {
        console.error("An error occurred while adding note:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  }


  async function handleEditNote(updatedNoteData, id) {

    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedNoteData),
      });
  
      if(response.ok) {
        mutateNotes();
      } else {
        console.error("An error occurred while changing data:", response.status, response.statusText);
        return;
      }
    } catch (error) {
        console.error("Network error", error);
    }
}


async function handleDeleteNote(id) {
  try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });
  
      if(response.ok) {
        mutateNotes();
        toast.success("Note successfully deleted");
      } else {
        console.error("An error occurred while deleting note:", response.status, response.statusText);
        return;
      }
    } catch (error) {
        console.error("Network error", error);
    }
}

 
  async function handleAddReminder(newReminderData, plantId, name) {
    const newReminder = {
      plantName: name,
      relatedPlant: plantId,
      ...newReminderData
    };

    try {
      const response = await fetch("/api/reminders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReminder),
      });
  
      if (response.ok) {
        mutateReminders();
        setIsReminder(false);
        setShowModal(false);
      } else {
        console.error("An error occurred while adding reminder:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Network error", error);
    }
  }


  async function handleDeleteReminder(id, task) {
    try {
        const response = await fetch(`/api/reminders/${id}`, {
          method: "DELETE",
        });
    
        if(response.ok) {
          mutateReminders();
          toast.success(`${task} completed`);
        } else {
          console.error("An error occurred while deleting reminder:", response.status, response.statusText);
          return;
        }
      } catch (error) {
          console.error("Network error", error);
      }
  }


  // error handling of SWR configuration
  // has to be positioned after every hook and state
  if (tipsError) return <div>Error loading the tips</div>;
  if (!tips) return <div>Loading...</div>;

  if (notesError) return <div>Error loading the notes</div>;
  if (!notes) return <div>Loading...</div>;

  if (remindersError) return <div>Error loading the reminders</div>;
  if (!reminders) return <div>Loading...</div>;

  if (plantsError) return <div>Error loading the plants</div>;
  if (!fetchedPlants) return <div>Loading...</div>;

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
        notesData={notes}
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
