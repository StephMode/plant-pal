import styled from "styled-components";
import { FiSun } from "react-icons/fi";

export default function PlantFilterSection({ handleFilterPlants, showPlantFilterSection, handleFilterPlantsReset }) {


    return (
        showPlantFilterSection && (
        <StyledPlantFilterSection>
            <h2>Filter options</h2>
            <form>
                <StyledFieldsetRadio>
                    <legend>Light needs </legend>

                    <StyledRadioInput id="light-full-shade" name="lightNeed" type="radio" value="Full Shade" onChange={() => handleFilterPlants("Full Shade")} />
                    <StyledRadiolabel htmlFor="light-full-shade">
                        <StyledSunIconFull />
                        <StyledSunIcon />
                        <StyledSunIcon />
                    </StyledRadiolabel>

                    <StyledRadioInput id="light-partial-shade" name="lightNeed" type="radio" value="Partial Shade" onChange={() => handleFilterPlants("Partial Shade")} />
                    <StyledRadiolabel htmlFor="light-partial-shade">
                        <StyledSunIconFull />
                        <StyledSunIconFull />
                        <StyledSunIcon />
                    </StyledRadiolabel>

                    <StyledRadioInput id="light-full-sun" name="lightNeed" type="radio" value="Full Sun" onChange={() => handleFilterPlants("Full Sun")} />
                    <StyledRadiolabel htmlFor="light-full-sun">
                        <StyledSunIconFull />
                        <StyledSunIconFull />
                        <StyledSunIconFull /> 
                    </StyledRadiolabel>

                    <StyledRadioInputReset id="reset" name="lightNeed" type="radio" value="reset" onChange={handleFilterPlantsReset} />
                    <StyledRadiolabelReset htmlFor="reset">Reset</StyledRadiolabelReset>
                </StyledFieldsetRadio>
            </form>
        </StyledPlantFilterSection>
    ));
};


const StyledPlantFilterSection = styled.section`
    background-color: var(--gray);
    border-radius: 15px;
    width: 80%;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

const StyledFieldsetRadio = styled.fieldset`
display: flex;
flex-direction: row;
border: none;
padding: 10px 0;
color: var(--green-main);
justify-content: flex-start;
gap: 5px;
flex-wrap: wrap;
`;

const StyledRadiolabel = styled.label`
background: var(--green-light);
min-width: 50px;
padding: 5px 10px;
border-radius: 20px;  
font-weight: bold; 
cursor: pointer;
`;

const StyledRadioInput = styled.input`
display: none;

&:checked + label {
    background: var(--green-main);
    font-weight: bold;
    color: var(--white);
}
`;

const StyledRadiolabelReset = styled.label`
  background-color: var(--white);
  min-width: 68px;
  padding: 5px 10px;
  border: none;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
`;

const StyledRadioInputReset = styled.input`
display: none;

&:active + label {
    background-color: var(--white);
    padding: 8px 20px;
    border: 1px solid var(--black);
    border-radius: 20px;
    font-weight: bold;
}
`;

const StyledSunIconFull = styled(FiSun)`
  color: gold;
  fill: gold;
`;

const StyledSunIcon = styled(FiSun)`
  color: gold;
  fill: none;
`;