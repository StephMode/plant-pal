import AddPlantForm from "/components/AddPlantForm";
import PlantCard from "/components/PlantCard";
import Link from "next/link";
import styled from "styled-components";
import Button from "/components/Button";
import PlantFilterSection from "/components/PlantFilterSection";


export default function HomePage({ handleToggleOwned, plants, handleAddPlant, onFilterPlant, onToggleModal, showPlantFilterSection, handleFilterSection}) {

  return (
    <main>
      <h1>Plant List</h1>
      { plants.length === 0 ? (
        <>
          <StyledInfoText>No plants there yet. Add new ones!</StyledInfoText>
          <StyledButton type="button">Add Plant</StyledButton>
        </>
      ) : (
        <>
          <Button buttonText="Filter" handleButtonFunction={handleFilterSection} />
          <PlantFilterSection handleFilterPlant={onFilterPlant} showPlantFilterSection={showPlantFilterSection} />
          <AddPlantForm handleAddPlant={handleAddPlant}/>
          <ul>
            {plants.map((plant) => (
              <li key={plant.id}>
                <PlantCard
                  plantId={plant.id}
                  image={plant.imageUrl}
                  name={plant.name}
                  botanicalName={plant.botanicalName}
                  handleToggleOwned={handleToggleOwned}
                  isOwned={plant.isOwned}
                />
              </li>
            ))}
          </ul>
        </>
      )}
      <Link href="/myplants">My Plants</Link>
    </main>
  );
}


const StyledInfoText = styled.p`
  color: var(--green-main);
  background-color: var(--gray);
  margin-top: 10px;
  padding: 40px;
  border-radius: 25px;
`;


const StyledButton = styled.button`
    background-color: var(--green-light);
    padding: 8px 20px;
    border: none;
    border-radius: 20px;
    margin: 10px 0;
`;


