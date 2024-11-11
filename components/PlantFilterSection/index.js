import styled from "styled-components";

export default function PlantFilterSection({ handleFilterPlant }) {


    return (
        // showPlantFilterSection && ()
        <StyledPlantFilterSection>
        <h2>Filter options</h2>
        <StyledFilterButtonContainer>
            <StyledFilterButton type="button" onClick={() => handleFilterPlant("Full Sun")}>full sun</StyledFilterButton>
            <StyledFilterButton type="button" onClick={() => handleFilterPlant("Partial Shade")}>partial shade</StyledFilterButton>
            <StyledFilterButton type="button" onClick={() => handleFilterPlant("Full Shade")}>full shade</StyledFilterButton>
            <StyledResetButton type="button">reset</StyledResetButton>
        </StyledFilterButtonContainer>
        </StyledPlantFilterSection>
    );
};


const StyledPlantFilterSection = styled.section`
    background-color: var(--gray);
    border-radius: 15px;
    width: 80%;
    padding: 20px;
    margin: 20px 0;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

const StyledFilterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledFilterButton = styled.button`
  background-color: var(--white);
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

`;

const StyledResetButton = styled.button`
  background-color: var(--brown);
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;