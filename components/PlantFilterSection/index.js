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
              onChange={() => handleFilterPlants("lightNeed", "Full Shade")}
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
              onChange={() => handleFilterPlants("lightNeed", "Partial Shade")}
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
              onChange={() => handleFilterPlants("lightNeed", "Full Sun")}
            />
            <StyledRadiolabel htmlFor="light-full-sun">
              <StyledIconSection>
                <IoIosSunny />
                <p>Full sun</p>
              </StyledIconSection>
            </StyledRadiolabel>

            <legend>Water needs </legend>

            <StyledRadioInput
              id="water-low"
              name="waterNeed"
              type="radio"
              value="Low"
              onChange={() => handleFilterPlants("waterNeed", "Low")}
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
              onChange={() => handleFilterPlants("waterNeed", "Medium")}
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
              onChange={() => handleFilterPlants("waterNeed", "High")}
            />
            <StyledRadiolabel htmlFor="water-high">
              <StyledIconSection>
                <RiDropFill />
                <p>High</p>
              </StyledIconSection>
            </StyledRadiolabel>
          </StyledFieldsetRadio>
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
  gap: 5px;
  flex-wrap: wrap;
`;

const StyledRadiolabel = styled.label`
  background: var(--green-light);
  min-width: 50px;
  padding: 6px 10px 2px;
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
