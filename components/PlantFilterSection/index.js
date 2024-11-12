import styled from "styled-components";

export default function PlantFilterSection({ handleFilterPlant, showPlantFilterSection, handleFilterPlantReset }) {


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

                    <StyledRadioInputReset id="reset" name="lightNeed" type="radio" value="reset" onChange={handleFilterPlantReset} />
                    <StyledRadiolabelReset htmlFor="reset">Reset</StyledRadiolabelReset>
                </StyledFieldsetRadio>
            </form>
            {/* <StyledResetButton type="button" onClick={handleFilterPlantReset}>reset</StyledResetButton> */}
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

const StyledFieldsetRadio = styled.fieldset`
display: flex;
flex-direction: row;
border: none;
padding: 10px 0;
color: var(--green-main);
justify-content: flex-start;
gap: 5px;
`;

const StyledRadiolabel = styled.label`
background: var(--green-light);
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
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
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