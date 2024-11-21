import PlantCard from "/components/PlantCard";
import styled from "styled-components";
import Button from "/components/Button";
import PlantFilterSection from "/components/PlantFilterSection";
import { AiOutlineControl } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import TipBanner from "/components/TipBanner";

export default function HomePage({
  handleToggleOwned,
  plants,
  onFilterPlants,
  showPlantFilterSection,
  toggleFilterSection,
  onFilterPlantsReset,
  selectedFilter,
  filteredPlants,
  randomTip,
  progress,
  handleMouseLeave,
  handleMouseHover,
}) {
  const plantsToBeRendered =
    filteredPlants !== plants ? filteredPlants : plants;

  return (
    <main>
      <h1>Plant List</h1>
      <StyledSpacer />
      <TipBanner
        randomTip={randomTip}
        progress={progress}
        handleMouseHover={handleMouseHover}
        handleMouseLeave={handleMouseLeave}
      />
      <StyledFilterButtonSection>
        <Button
          buttonText={
            showPlantFilterSection ? <IoClose /> : <AiOutlineControl />
          }
          handleButtonFunction={toggleFilterSection}
        />
      </StyledFilterButtonSection>
      <StyledSpacer2 />
      <PlantFilterSection
        handleFilterPlants={onFilterPlants}
        showPlantFilterSection={showPlantFilterSection}
        handleFilterPlantsReset={onFilterPlantsReset}
        selectedFilter={selectedFilter}
      />
      {filteredPlants.length === 0 && (
        <StyledInfoText>No plants were found. Reset filter.</StyledInfoText>
      )}
      {!selectedFilter && plants.length === 0 ? (
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
            </li>
          ))}
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
  height: 75px;
`;
const StyledSpacer2 = styled.span`
  display: block;
  height: 17px;
`;
const StyledFilterButtonSection = styled.section`
  margin-right: 6px;
  align-self: end;
`;
