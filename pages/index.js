import PlantCard from "/components/PlantCard";
import styled from "styled-components";
import Button from "/components/Button";
import PlantFilterSection from "/components/PlantFilterSection";


export default function HomePage({ handleToggleOwned, plants, onFilterPlants, showPlantFilterSection, toggleFilterSection, onFilterPlantsReset, selectedFilter, filteredPlants}) {
  const plantsToBeRendered = filteredPlants !== plants ? filteredPlants : plants;

  return (
    <main>
      <h1>Plant List</h1>
      <Button buttonText={showPlantFilterSection ? "Close Filter" : "Filter"} handleButtonFunction={toggleFilterSection} />
      <PlantFilterSection handleFilterPlants={onFilterPlants} showPlantFilterSection={showPlantFilterSection} handleFilterPlantsReset={onFilterPlantsReset} />
      { filteredPlants.length === 0 && 
           <StyledInfoText>No plants were found. Reset filter.</StyledInfoText> }
      { !selectedFilter && plants.length === 0 ? (
          <StyledInfoText>No plants there yet. Add new ones!</StyledInfoText>
      ) : (
          <ul>
           {plantsToBeRendered.map((plant) => (
              <li key={plant.id}>
                <PlantCard
                  plantId={plant.id}
                  image={plant.imageUrl}
                  name={plant.name}
                  botanicalName={plant.botanicalName}
                  handleToggleOwned={handleToggleOwned}
                  isOwned={plant.isOwned}
                />
              </li>)
            ) }
          </ul>
      )}
    </main>
  );
}


const StyledInfoText = styled.p`
  color: var(--green-main);
  background-color: var(--gray);
  margin: 10px 0;
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

const StyledSpacer = styled.section`
height: 30px;
display: block;
`




