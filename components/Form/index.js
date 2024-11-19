import styled, { ThemeProvider } from "styled-components";
import { IoClose } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { IoIosPartlySunny } from "react-icons/io";
import { RiDropLine } from "react-icons/ri";
import { RiDropFill } from "react-icons/ri";
import { RiContrastDrop2Fill } from "react-icons/ri";
import { useState } from "react";
import toast from 'react-hot-toast';

export default function Form({
  handleAddPlant,
  plant,
  buttonText,
  handleToggleModal,
  handleEditPlant,
}) {
  const [showErrorMessageName, setShowErrorMessageName] = useState(false);
  const [showErrorMessageBotanicalName, setShowErrorMessageBotanicalName] = useState(false);
  const [showErrorMessageFertilizerSeason, setShowErrorMessageFertilizerSeason] = useState(false);
  
  function handleSubmitPlant(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    const selectedSeasons = formData.getAll("fertiliserSeason");
    data.fertiliserSeason = selectedSeasons;

    if (data.name === "" || data.botanicalName === "" || data.fertiliserSeason.length === 0) {
        toast.error("Some plant details are missing");
        if (data.name === "") {setShowErrorMessageName(true)};
        if (data.botanicalName === "") {setShowErrorMessageBotanicalName(true)};
        if (data.fertiliserSeason.length === 0) {setShowErrorMessageFertilizerSeason(true)};
    } else {
      if (buttonText === "Edit") { handleEditPlant(data, plant.id); toast.success("Plant successfully edited") }
      else if (buttonText === "Add") {
        handleAddPlant(data); toast.success("Plant successfully added")
      }
      event.target.reset();
    }
  }

  return (
    <StyledSection>
      <form onSubmit={handleSubmitPlant}>
      {buttonText === "Edit" && (
            <StyledCloseButton type="button" onClick={() => handleToggleModal("Edit")}>
               <IoClose />
            </StyledCloseButton>
          )}
        <StyledFieldset>
          <label htmlFor="plantName">Plant name:</label>
          <ThemeProvider theme={showErrorMessageName ? errorMessagetheme : defaultTheme}>
          <StyledInput
            id="plantName"
            name="name"
            type="text"
            placeholder="e.g. Monstera"
            defaultValue={buttonText === "Edit" ? plant.name : ""}
            onChange={() => {setShowErrorMessageName(false)}}           
          ></StyledInput>
          </ThemeProvider>
          <StyledErrorMessage>{showErrorMessageName && "Please provide a name for the plant."}&nbsp;</StyledErrorMessage>
        </StyledFieldset>
        <StyledFieldset>
          <label htmlFor="botanicalPlantName">Botanical plant name:</label>
          <ThemeProvider theme={showErrorMessageBotanicalName ? errorMessagetheme : defaultTheme}>
          <StyledInput
            id="botanicalPlantName"
            name="botanicalName"
            type="text"
            placeholder="e.g. Monstera deliciosa"
            defaultValue={buttonText === "Edit" ? plant.botanicalName : ""}
            onChange={() => {setShowErrorMessageBotanicalName(false)}}
          ></StyledInput>
          </ThemeProvider>
          <StyledErrorMessage>{showErrorMessageBotanicalName && "Please provide a botanical name for the plant."}&nbsp;</StyledErrorMessage>
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
          <StyledLegend> Light needs: </StyledLegend>

          <StyledRadioInput
            id="light-full-shade"
            name="lightNeed"
            type="radio"
            value="Full Shade"
            defaultChecked
          />
          <StyledRadiolabel htmlFor="light-full-shade">
          <IoMdMoon /> Full Shade{" "}
          </StyledRadiolabel>

          <StyledRadioInput
            id="light-partial-shade"
            name="lightNeed"
            type="radio"
            value="Partial Shade"
            defaultChecked={buttonText === "Edit" && plant.lightNeed == "Partial Shade"}

          />
          <StyledRadiolabel htmlFor="light-partial-shade">
          <IoIosPartlySunny /> Partial Shade{" "}
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
          <IoIosSunny /> Full Sun{" "}
          </StyledRadiolabel>
        </StyledFieldsetRadio>
        {/*-----------------------------------------------------------*/}
        <StyledFieldsetRadio>
          <StyledLegend> Water needs:</StyledLegend>

          <StyledWaterRadioInput
            id="water-low"
            name="waterNeed"
            type="radio"
            value="Low"
            defaultChecked
          />
          <StyledWaterRadiolabel htmlFor="water-low"><RiDropLine /> Low</StyledWaterRadiolabel>

          <StyledWaterRadioInput
            id="water-medium"
            name="waterNeed"
            type="radio"
            value="Medium"
            defaultChecked={
              buttonText === "Edit" && plant.waterNeed == "Medium"

            }
          />
          <StyledWaterRadiolabel htmlFor="water-medium"><RiContrastDrop2Fill /> Medium</StyledWaterRadiolabel>

          <StyledWaterRadioInput
            id="water-high"
            name="waterNeed"
            type="radio"
            value="High"
            defaultChecked={
              buttonText === "Edit" && plant.waterNeed == "High"
            }
          />
          <StyledWaterRadiolabel htmlFor="water-high"><RiDropFill /> High </StyledWaterRadiolabel>
        </StyledFieldsetRadio>
        {/*-----------------------------------------------------------*/}
        <StyledFieldsetCheckbox>
          <StyledLegend>Fertiliser Season:</StyledLegend>
          
          <StyledCheckboxInputWrapper>

          <StyledCheckboxInput
            id="fertiliser-spring"
            name="fertiliserSeason"
            type="checkbox"
            value="Spring"
            defaultChecked={
              buttonText === "Edit" &&
              !plant.fertiliserSeason.includes("Spring") ? false : true
            }
            onChange={() => {setShowErrorMessageFertilizerSeason(false)}}
          />
          <ThemeProvider theme={showErrorMessageFertilizerSeason ? errorMessagethemeCheckBox : defaultThemeCheckbox}>
          <StyledCheckboxLabel htmlFor="fertiliser-spring">
            Spring
          </StyledCheckboxLabel>
          </ThemeProvider>

          <StyledCheckboxInput
            id="fertiliser-summer"
            name="fertiliserSeason"
            type="checkbox"
            value="Summer"
            defaultChecked={
              buttonText === "Edit" && plant.fertiliserSeason.includes("Summer")

            }
            onChange={() => {setShowErrorMessageFertilizerSeason(false)}}
          />
          <ThemeProvider theme={showErrorMessageFertilizerSeason ? errorMessagethemeCheckBox : defaultThemeCheckbox}>
          <StyledCheckboxLabel htmlFor="fertiliser-summer">
            Summer
          </StyledCheckboxLabel>
          </ThemeProvider>

          <StyledCheckboxInput
            id="fertiliser-fall"
            name="fertiliserSeason"
            type="checkbox"
            value="Fall"
            defaultChecked={
              buttonText === "Edit" && plant.fertiliserSeason.includes("Fall")
            }
            onChange={() => {setShowErrorMessageFertilizerSeason(false)}}
          />

          <ThemeProvider theme={showErrorMessageFertilizerSeason ? errorMessagethemeCheckBox : defaultThemeCheckbox}>
          <StyledCheckboxLabel htmlFor="fertiliser-fall">
            Fall
          </StyledCheckboxLabel>
          </ThemeProvider>

          <StyledCheckboxInput
            id="fertiliser-winter"
            name="fertiliserSeason"
            type="checkbox"
            value="Winter"
            defaultChecked={
              buttonText === "Edit" && plant.fertiliserSeason.includes("Winter")

            }
            onChange={() => {setShowErrorMessageFertilizerSeason(false)}}
          />

          <ThemeProvider theme={showErrorMessageFertilizerSeason ? errorMessagethemeCheckBox : defaultThemeCheckbox}>
          <StyledCheckboxLabel htmlFor="fertiliser-winter">
            Winter
          </StyledCheckboxLabel>
          </ThemeProvider>

          </StyledCheckboxInputWrapper>

          <StyledErrorMessage>{showErrorMessageFertilizerSeason && "Please select at least one season!"}&nbsp;</StyledErrorMessage>

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
  min-width: 350px;
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
  padding: 2px 0;
  color: var(--green-main);
  text-align: left;
`;
const StyledFieldsetRadio = styled.fieldset`
  display: flex;
  flex-direction: row;
  border: none;
  padding: 10px 0;
  color: var(--green-main);
  justify-content: space-between;
  gap: 5px;
`;
const StyledInput = styled.input`
  border: none;
  border-radius: 30px;
  padding: 10px 15px;
  margin-top: 6px;

  font-family: inherit;

  background-color: rgba(0,0,0,0.1);
  border: 2px solid ${props => props.theme.main};

  &:focus {
    outline-color:var(--green-light);
  }
`;
StyledInput.defaultProps = {
  theme: {
    main: "rgba(0,0,0,0.1)"
  }
}
const defaultTheme = {
  main: "rgba(0,0,0,0.1)"
}
const errorMessagetheme = {
  main: "var(--error-red)"
}

const StyledErrorMessage = styled.p`
  color: var(--error-red);
  font-size: 0.75rem;
  margin-left: 15px;
  padding-top: 5px;

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
  font-family: inherit;
  
  &:focus {
    outline-color:var(--green-light);
  }
`;
const StyledRadiolabel = styled.label`
  background: var(--green-light);
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: normal;
  text-align: center;
  font-size: 14px;
  display: flex;
    align-items: center;
    gap: 5px;
`;
const StyledWaterRadiolabel = styled.label`
  background: var(--green-light);
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: normal;
  text-align: center;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  width: 30%;
  gap: 10px;
  justify-content: center;
`;
const StyledRadioInput = styled.input`
  display: none;

  &:checked + label {
    background: var(--green-main);
    color: var(--white);
    text-align: center;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
const StyledWaterRadioInput = styled.input`
  display: none;

  &:checked + label {
    background: var(--green-main);
    color: var(--white);
    text-align: center;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
const StyledFieldsetCheckbox = styled.fieldset`
  display: block;
  border: none;
  color: var(--green-main);
`;
const StyledCheckboxInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0 0 0;
`;
const StyledCheckboxLabel = styled.label`
  background: var(--green-light);
  border: 2px solid ${props => props.theme.main};
  
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: normal;
  font-size: 14px;  
  width: 22%;
  text-align: center;
`;
StyledCheckboxLabel.defaultProps = {
  theme: {
    main: "var(--green-light)"
  }
}
const defaultThemeCheckbox = {
  main: "var(--green-light)"
}
const errorMessagethemeCheckBox = {
  main: "var(--error-red)"
}

const StyledCheckboxInput = styled.input`
  display: none;

  &:checked + label {
    border: 2px solid var(--green-main);
    background: var(--green-main);
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
const StyledLegend = styled.legend`
  width: 100%;
  text-align: left;
`;

