import styled from "styled-components";

export default function AddPlantForm ({handleAddPlant}){

    function handleSubmitAddPlant(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {}
        formData.forEach((value, key) => {
            if (key === "fertiliserSeason") {
              if (!data[key]) {
                data[key] = [];
              }
              data[key].push(value);
            } else {
              data[key] = value;
            }
          });
        handleAddPlant(data)
        event.target.reset();
    }

    return(
        <StyledSection>
            <StyledH2>Add plant</StyledH2>
            <form onSubmit={handleSubmitAddPlant}>
                <StyledFieldset>
                    <label htmlFor="plantName">
                    Plant name:
                    </label>
                    <StyledInput id="plantName" name="name" type="text" placeholder="e.g. Monstera" required></StyledInput>
                </StyledFieldset>
                <StyledFieldset>
                    <label htmlFor="botanicalPlantName">
                    Botanical plant name:
                    </label>
                    <StyledInput id="botanicalPlantName" name="botanicalName" type="text" placeholder="e.g. Monstera deliciosa" required></StyledInput>
                </StyledFieldset>
                <StyledFieldset>
                    <label htmlFor="plantDescription">
                    Description:
                    </label>
                    <StyledTextarea id="plantDescription" name="description" type="text" placeholder="e.g. Monstera deliciosa, also known as the Swiss cheese plant"></StyledTextarea>
                </StyledFieldset>
                {/*-----------------------------------------------------------*/}
                <StyledFieldsetRadio>
                    <legend> Light needs </legend>

                    <StyledRadioInput id="light-full-shade" name="lightNeed" type="radio" value="Full Shade" required/>
                    <StyledRadiolabel htmlFor="light-full-shade">Full Shade </StyledRadiolabel>

                    <StyledRadioInput id="light-partial-shade" name="lightNeed" type="radio" value="Partial Shade" required/>
                    <StyledRadiolabel htmlFor="light-partial-shade">Partial Shade </StyledRadiolabel>

                    <StyledRadioInput id="light-full-sun" name="lightNeed" type="radio" value="Full Sun" required/>
                    <StyledRadiolabel htmlFor="light-full-sun">Full Sun </StyledRadiolabel>
                </StyledFieldsetRadio>
                {/*-----------------------------------------------------------*/}
                <StyledFieldsetRadio>
                    <legend> Water needs </legend>

                    <StyledRadioInput id="water-low" name="waterNeed" type="radio" value="Low" required/>
                    <StyledRadiolabel htmlFor="water-low">Low</StyledRadiolabel>

                    <StyledRadioInput id="water-medium" name="waterNeed" type="radio" value="Medium" required/>
                    <StyledRadiolabel htmlFor="water-medium">Medium</StyledRadiolabel>

                    <StyledRadioInput id="water-high" name="waterNeed" type="radio" value="High" required/>
                    <StyledRadiolabel htmlFor="water-high">High </StyledRadiolabel>
                </StyledFieldsetRadio>
                {/*-----------------------------------------------------------*/}
                <StyledFieldsetCheckbox>
                    <legend>Fertiliser Season</legend>

                        <StyledCheckboxInput id="fertiliser-spring" name="fertiliserSeason" type="checkbox" value="Spring"/>
                        <StyledCheckboxLabel htmlFor="fertiliser-spring">Spring</StyledCheckboxLabel>

                        <StyledCheckboxInput id="fertiliser-summer" name="fertiliserSeason" type="checkbox" value="Summer"/>
                        <StyledCheckboxLabel htmlFor="fertiliser-summer">Summer</StyledCheckboxLabel>

                        <StyledCheckboxInput id="fertiliser-fall" name="fertiliserSeason" type="checkbox" value="Fall"/>
                        <StyledCheckboxLabel htmlFor="fertiliser-fall">Fall</StyledCheckboxLabel>

                        <StyledCheckboxInput id="fertiliser-winter" name="fertiliserSeason" type="checkbox" value="Winter"/>
                        <StyledCheckboxLabel htmlFor="fertiliser-winter">Winter</StyledCheckboxLabel>

                </StyledFieldsetCheckbox>
                <StyledSubmitButton type="submit">Add plant</StyledSubmitButton>
            </form>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    padding: 15px;
    background: var(--gray);
    margin-bottom: 50px;
    border-radius: 25px;
    width: 95%;
    max-width: 600px;
`;
 const StyledH2 = styled.h2`
    color: var(--green-main);
    text-align: center;
    padding: 0px 5px 10px 5px;
 `;
 const StyledFieldset = styled.fieldset`
    flex-direction: column;
    display: flex;
    border: none;
    padding: 10px 0;
    color: var(--green-main)
 `;
 const StyledFieldsetRadio = styled.fieldset`
    display: flex;
    flex-direction: row;
    border: none;
    padding: 10px 0;
    color: var(--green-main);
    justify-content: flex-start;
    gap: 15px;
 `;
 const StyledInput = styled.input`
    border: none;
    border-radius: 30px;
    padding: 10px 15px;
    margin-top: 6px;
 `;
 const StyledTextarea = styled.textarea`
    border: none;
    border-radius: 30px;
    padding: 10px 15px;
    margin-top: 6px;
 `;
 const StyledRadiolabel = styled.label`
    background: var(--green-light);
    padding: 5px 10px;
    border-radius: 20px;  
    font-weight: bold; 
 `;
 const StyledRadioInput = styled.input`
	display: none;

    &:checked + label {
        background: var(--green-main);
        font-weight: bold;
        color: var(--white);
    }
 `;
 const StyledFieldsetCheckbox = styled.fieldset`
    display: flex;
    flex-direction: row;
    border: none;
    padding: 10px 0;
    color: var(--green-main);
    justify-content: space-between;
 `;
 const StyledCheckboxLabel = styled.label`
    background: var(--green-light);
    padding: 5px 10px;
    border-radius: 20px;  
    font-weight: bold; 
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
    background-color: var(--green-main);
    color: var(--white);
    font-weight: bold;
    border: none;
    border-radius: 20px;
    width: 100%;
    margin-top: 30px;

    &:hover {
        background-color: var(--green-main-dark);
        cursor: pointer;
    }
 `;
