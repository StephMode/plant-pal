import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export default function Form({
  handleAddPlant,
  plant,
  buttonText,
  handleToggleModal,
  handleEditPlant,
}) {
  function handleSubmitAddPlant(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const selectedSeasons = formData.getAll("fertiliserSeason");
    if (selectedSeasons.length === 0) {
      alert("Please select at least one season.");
      return;
    }
    data.fertiliserSeason = selectedSeasons;

    if (buttonText === "Edit") { handleEditPlant(data, plant.id) }
    else if (buttonText === "Add") {
      handleAddPlant(data)
    }


    event.target.reset();
  }
  return (
    <StyledSection>
      <form onSubmit={handleSubmitAddPlant}>
      {buttonText === "Edit" && (
            <StyledCloseButton type="button" onClick={() => handleToggleModal("Edit")}>
               <IoClose />
            </StyledCloseButton>
          )}
        <StyledFieldset>
          <label htmlFor="plantName">Plant name:</label>
          <StyledInput
            id="plantName"
            name="name"
            type="text"
            placeholder="e.g. Monstera"
            required
            defaultValue={buttonText === "Edit" ? plant.name : ""}
          ></StyledInput>
        </StyledFieldset>
        <StyledFieldset>
          <label htmlFor="botanicalPlantName">Botanical plant name:</label>
          <StyledInput
            id="botanicalPlantName"
            name="botanicalName"
            type="text"
            placeholder="e.g. Monstera deliciosa"
            required
            defaultValue={buttonText === "Edit" ? plant.botanicalName : ""}
          ></StyledInput>
        </StyledFieldset>
        <StyledFieldset>
          <label htmlFor="plantDescription">Description:</label>
          <StyledTextarea
            id="plantDescription"
            name="description"
            type="text"
            placeholder="e.g. Monstera deliciosa, also known as the Swiss cheese plant"
            defaultValue={buttonText === "Edit" ? plant.description : ""}
          ></StyledTextarea>
        </StyledFieldset>
        {/*-----------------------------------------------------------*/}
        <StyledFieldsetRadio>
          <legend> Light needs </legend>

          <StyledRadioInput
            id="light-full-shade"
            name="lightNeed"
            type="radio"
            value="Full Shade"
            defaultChecked
          />
          <StyledRadiolabel htmlFor="light-full-shade">
            Full Shade{" "}
          </StyledRadiolabel>

          <StyledRadioInput
            id="light-partial-shade"
            name="lightNeed"
            type="radio"
            value="Partial Shade"
            defaultChecked={buttonText === "Edit" && plant.lightNeed == "Partial Shade"}

          />
          <StyledRadiolabel htmlFor="light-partial-shade">
            Partial Shade{" "}
          </StyledRadiolabel>

          <StyledRadioInput
            id="light-full-sun"
            name="lightNeed"
            type="radio"
            value="Full Sun"
            defaultChecked={
              buttonText === "Edit" && plant.lightNeed == "Full Sun"}
          />
          <StyledRadiolabel htmlFor="light-full-sun">
            Full Sun{" "}
          </StyledRadiolabel>
        </StyledFieldsetRadio>
        {/*-----------------------------------------------------------*/}
        <StyledFieldsetRadio>
          <legend> Water needs </legend>

          <StyledRadioInput
            id="water-low"
            name="waterNeed"
            type="radio"
            value="Low"
            defaultChecked
          />
          <StyledRadiolabel htmlFor="water-low">Low</StyledRadiolabel>

          <StyledRadioInput
            id="water-medium"
            name="waterNeed"
            type="radio"
            value="Medium"
            defaultChecked={
              buttonText === "Edit" && plant.waterNeed == "Medium"

            }
          />
          <StyledRadiolabel htmlFor="water-medium">Medium</StyledRadiolabel>

          <StyledRadioInput
            id="water-high"
            name="waterNeed"
            type="radio"
            value="High"
            defaultChecked={
              buttonText === "Edit" && plant.waterNeed == "High"
            }
          />
          <StyledRadiolabel htmlFor="water-high">High </StyledRadiolabel>
        </StyledFieldsetRadio>
        {/*-----------------------------------------------------------*/}
        <StyledFieldsetCheckbox>
          <legend>Fertiliser Season</legend>

          <StyledCheckboxInput
            id="fertiliser-spring"
            name="fertiliserSeason"
            type="checkbox"
            value="Spring"
            defaultChecked={
              buttonText === "Edit" &&
              !plant.fertiliserSeason.includes("Spring")

            }
          />
          <StyledCheckboxLabel htmlFor="fertiliser-spring">
            Spring
          </StyledCheckboxLabel>

          <StyledCheckboxInput
            id="fertiliser-summer"
            name="fertiliserSeason"
            type="checkbox"
            value="Summer"
            defaultChecked={
              buttonText === "Edit" && plant.fertiliserSeason.includes("Summer")

            }
          />
          <StyledCheckboxLabel htmlFor="fertiliser-summer">
            Summer
          </StyledCheckboxLabel>

          <StyledCheckboxInput
            id="fertiliser-fall"
            name="fertiliserSeason"
            type="checkbox"
            value="Fall"
            defaultChecked={
              buttonText === "Edit" && plant.fertiliserSeason.includes("Fall")

            }
          />
          <StyledCheckboxLabel htmlFor="fertiliser-fall">
            Fall
          </StyledCheckboxLabel>

          <StyledCheckboxInput
            id="fertiliser-winter"
            name="fertiliserSeason"
            type="checkbox"
            value="Winter"
            defaultChecked={
              buttonText === "Edit" && plant.fertiliserSeason.includes("Winter")

            }
          />
          <StyledCheckboxLabel htmlFor="fertiliser-winter">
            Winter
          </StyledCheckboxLabel>
        </StyledFieldsetCheckbox>
        <StyledButtonContainer>

          <StyledSubmitButton type="submit">
            {buttonText === "Edit" ? "Edit Plant" : "Add plant"}
          </StyledSubmitButton>
        </StyledButtonContainer>
      </form>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  padding: 15px;
  border-radius: 25px;
  max-width: 600px;
  min-width: 330px;
`;
const StyledCloseButton = styled.button`
  background-color: var(--brown);
  border: none;
  border-radius: 20px;
  padding: 5px 6px 0px 6px;
  font-size: 26px;
  position: absolute;
  top: -10px;
  right: -10px;
  transition: all ease-in-out 0.5s;

  &:hover {
    background-color: var(--brown-dark);
  }
`;
const StyledFieldset = styled.fieldset`
  flex-direction: column;
  display: flex;
  border: none;
  padding: 10px 0;
  color: var(--green-main);
`;
const StyledFieldsetRadio = styled.fieldset`
  display: flex;
  flex-direction: row;
  border: none;
  padding: 10px 0;
  color: var(--green-main);
  justify-content: space-between;
  gap: 15px;
`;
const StyledInput = styled.input`
  border: none;
  border-radius: 30px;
  padding: 10px 15px;
  margin-top: 6px;
  background-color: rgba(0,0,0,0.1);

  &:focus {
    outline-color:var(--green-light);
  }
`;
const StyledTextarea = styled.textarea`
  border: none;
  border-radius: 30px;
  padding: 10px 15px;
  margin-top: 6px;
  max-width: 570px;
  max-height: 300px;
  width: 100%;
  height: auto;
  resize: none;
  min-height: 50px;
  background-color: rgba(0,0,0,0.1);
  
  &:focus {
    outline-color:var(--green-light);
  }
`;
const StyledRadiolabel = styled.label`
  background: var(--green-light);
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
`;
const StyledRadioInput = styled.input`
  display: none;

  &:checked + label {
    background: var(--green-main);
    font-weight: bold;
    color: var(--white);
    text-align: center;
  }
`;
const StyledFieldsetCheckbox = styled.fieldset`
  display: flex;
  flex-direction: row;
  border: none;
  padding: 10px 0;
  color: var(--green-main);
  justify-content:space-between;
  gap: 15px;
  flex-wrap: wrap;
`;
const StyledCheckboxLabel = styled.label`
  background: var(--green-light);
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 14px;
`;
const StyledCheckboxInput = styled.input`
  display: none;

  &:checked + label {
    background: var(--green-main);
    font-weight: bold;
    color: var(--white);
  }
`;
const StyledSubmitButton = styled.button`
  padding: 10px 15px;
  background-color: var(--brown);
  color: var(--black);
  font-weight: bold;
  border: none;
  border-radius: 20px;
  width: 100%;
  margin-top: 10px;
  transition: all ease-in-out 0.5s;

  &:hover {
    background-color: var(--green-main-dark);
    cursor: pointer;
    color: var(--white);
  }
`;
const StyledButtonContainer = styled.section`
display: flex;
gap: 15px;
`;


