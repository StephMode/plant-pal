import styled from "styled-components";

export default function PlantFilterSection({ handleFilterPlant }) {


    return (
        // showPlantFilterSection && ()
        <StyledPlantFilterSection>
            <h2>Filter options</h2>
            <form>
                <StyledFieldsetRadio>
                    <legend> Filter on Light needs </legend>

                    <StyledRadioInput id="light-full-shade" name="lightNeed" type="radio" value="Full Shade" onChange={() => handleFilterPlant("Full Shade")} />
                    <StyledRadiolabel htmlFor="light-full-shade">Full Shade </StyledRadiolabel>

                    <StyledRadioInput id="light-partial-shade" name="lightNeed" type="radio" value="Partial Shade" onChange={() => handleFilterPlant("Partial Shade")} />
                    <StyledRadiolabel htmlFor="light-partial-shade">Partial Shade </StyledRadiolabel>

                    <StyledRadioInput id="light-full-sun" name="lightNeed" type="radio" value="Full Sun" onChange={() => handleFilterPlant("Full Sun")} />
                    <StyledRadiolabel htmlFor="light-full-sun">Full Sun </StyledRadiolabel>
                </StyledFieldsetRadio>
            </form>
            <StyledResetButton type="button">reset</StyledResetButton>
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


const StyledResetButton = styled.button`
  background-color: var(--white);
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
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