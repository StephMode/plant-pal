import styled from "styled-components";
import { IoMdMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { IoIosPartlySunny } from "react-icons/io";
import { RxReset } from "react-icons/rx";
import { RiDropFill } from "react-icons/ri";
import { RiContrastDrop2Fill } from "react-icons/ri";
import { RiDropLine } from "react-icons/ri";

export default function PlantFilterSection({
  handleFilterPlants,
  showPlantFilterSection,
  handleFilterPlantsReset,
}) {
  return (
    showPlantFilterSection && (
      <StyledPlantFilterSection>
        <form onSubmit={handleFilterPlantsReset}>
          <StyledFieldsetRadio>
            <legend>Light needs </legend>

            <StyledRadioInput
              id="light-full-shade"
              name="lightNeed"
              type="radio"
              value="Full Shade"
              onClick={() => handleFilterPlants("lightNeed", "Full Shade")}
            />
            <StyledRadiolabel htmlFor="light-full-shade">
              <StyledIconSection>
                <IoMdMoon />
                <p>Full shade</p>
              </StyledIconSection>
            </StyledRadiolabel>

            <StyledRadioInput
              id="light-partial-shade"
              name="lightNeed"
              type="radio"
              value="Partial Shade"
              onClick={() => handleFilterPlants("lightNeed", "Partial Shade")}
            />
            <StyledRadiolabel htmlFor="light-partial-shade">
              <StyledIconSection>
                <IoIosPartlySunny />
                <p>Partial shade</p>
              </StyledIconSection>
            </StyledRadiolabel>

            <StyledRadioInput
              id="light-full-sun"
              name="lightNeed"
              type="radio"
              value="Full Sun"
              onClick={() => handleFilterPlants("lightNeed", "Full Sun")}
            />
            <StyledRadiolabel htmlFor="light-full-sun">
              <StyledIconSection>
                <IoIosSunny />
                <p>Full sun</p>
              </StyledIconSection>
            </StyledRadiolabel>
          </StyledFieldsetRadio>
          <StyledFieldsetRadio>
            <legend>Water needs </legend>

            <StyledRadioInput
              id="water-low"
              name="waterNeed"
              type="radio"
              value="Low"
              onClick={() => handleFilterPlants("waterNeed", "Low")}
            />
            <StyledRadiolabel htmlFor="water-low">
              <StyledIconSection>
                <RiDropLine />
                <p>Low</p>
              </StyledIconSection>
            </StyledRadiolabel>

            <StyledRadioInput
              id="water-medium"
              name="waterNeed"
              type="radio"
              value="Medium"
              onClick={() => handleFilterPlants("waterNeed", "Medium")}
            />
            <StyledRadiolabel htmlFor="water-medium">
              <StyledIconSection>
                <RiContrastDrop2Fill />
                <p>Medium</p>
              </StyledIconSection>
            </StyledRadiolabel>

            <StyledRadioInput
              id="water-high"
              name="waterNeed"
              type="radio"
              value="High"
              onClick={() => handleFilterPlants("waterNeed", "High")}
            />
            <StyledRadiolabel htmlFor="water-high">
              <StyledIconSection>
                <RiDropFill />
                <p>High</p>
              </StyledIconSection>
            </StyledRadiolabel>
          </StyledFieldsetRadio>
          <StyledFieldsetCheckbox>
            <StyledLegend>Fertiliser Season:</StyledLegend>

            <StyledCheckboxInput
              id="fertiliser-spring"
              name="fertiliserSeason"
              type="checkbox"
              value="Spring"
              onClick={() => handleFilterPlants("fertiliserSeason", "Spring")}
            />
            <StyledCheckboxlabel htmlFor="fertiliser-spring">
              Spring
            </StyledCheckboxlabel>

            <StyledCheckboxInput
              id="fertiliser-summer"
              name="fertiliserSeason"
              type="checkbox"
              value="Summer"
              onClick={() => handleFilterPlants("fertiliserSeason", "Summer")}
            />
            <StyledCheckboxlabel htmlFor="fertiliser-summer">
              Summer
            </StyledCheckboxlabel>

            <StyledCheckboxInput
              id="fertiliser-fall"
              name="fertiliserSeason"
              type="checkbox"
              value="Fall"
              onClick={() => handleFilterPlants("fertiliserSeason", "Fall")}
            />
            <StyledCheckboxlabel htmlFor="fertiliser-fall">
              Fall
            </StyledCheckboxlabel>

            <StyledCheckboxInput
              id="fertiliser-winter"
              name="fertiliserSeason"
              type="checkbox"
              value="Winter"
              onClick={() => handleFilterPlants("fertiliserSeason", "Winter")}
            />
            <StyledCheckboxlabel htmlFor="fertiliser-winter">
              Winter
            </StyledCheckboxlabel>
          </StyledFieldsetCheckbox>
          <StyledSubmitButton type="submit">
            <RxReset />
          </StyledSubmitButton>
        </form>
      </StyledPlantFilterSection>
    )
  );
}

const StyledPlantFilterSection = styled.section`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  width: 95%;
  padding: 10px 20px 5px 20px;
  margin: 0px 20px 20px;
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
  gap: 12px;
  flex-wrap: wrap;
`;
const StyledRadiolabel = styled.label`
  background: var(--green-light);
  min-width: 50px;
  padding: 8px 14px 4px;
  border-radius: 20px;
  cursor: pointer;
`;

const StyledRadioInput = styled.input`
  display: none;

  &:checked {
    background: var(--green-main);
    font-weight: bold;
    color: var(--white);
  }
`;

const StyledSubmitButton = styled.button`
  background-color: var(--white);
  padding: 6px 10px;
  border: none;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  font-size: 15px;
  margin-top: 10px;

  &:active {
    background-color: var(--white);
    padding: 8px 20px;
    border: 1px solid var(--black);
    border-radius: 20px;
    font-weight: bold;
  }
`;

const StyledIconSection = styled.section`
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 14px;
  gap: 5px;
  margin-bottom: 5px;
  flex-wrap: wrap;
`;
const StyledFieldsetCheckbox = styled.fieldset`
  display: flex;
  flex-direction: row;
  border: none;
  padding: 10px 0;
  color: var(--green-main);
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 8px;
`;
const StyledCheckboxlabel = styled.label`
  background: var(--green-light);
  min-width: 50px;
  padding: 8px 14px;
  border-radius: 20px;
  cursor: pointer;
`;

const StyledCheckboxInput = styled.input`
  display: none;

  &:checked {
    background: var(--green-main);
    color: var(--white);
  }
`;
const StyledLegend = styled.legend`
  width: 100%;
  text-align: left;
`;
