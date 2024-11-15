import PlantCard from "/components/PlantCard";
import styled from "styled-components";
import Button from "/components/Button";
import PlantFilterSection from "/components/PlantFilterSection";
import { AiOutlineControl } from "react-icons/ai";
import { IoClose } from "react-icons/io5";


export default function HomePage({ handleToggleOwned, plants, onFilterPlants, showPlantFilterSection, toggleFilterSection, onFilterPlantsReset, selectedFilter, filteredPlants}) {
  const plantsToBeRendered = filteredPlants !== plants ? filteredPlants : plants;

  return (
    <main>
      <h1>Plant List</h1>
      <StyledSpacer/>
      <StyledFilterButtonSection>
        <Button buttonText={showPlantFilterSection ? <IoClose /> : <AiOutlineControl />} handleButtonFunction={toggleFilterSection} />
      </StyledFilterButtonSection>
      <StyledSpacer2/>
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
const StyledSpacer = styled.span`
  display: block;
  height: 62px;
`;
const StyledSpacer2 = styled.span`
  display: block;
  height: 17px;
`;
const StyledFilterButtonSection = styled.section`
  margin-right: 10px;
  align-self: end;
`;




