import Form from "/components/Form";
import styled from "styled-components";

export default function AddPlantPage ({handleAddPlant}){
    return(
        <main>
            <h1>Add plant</h1>
            <StyledSpacer/>
            <Form handleAddPlant={handleAddPlant} buttonText={"Add"} />
        </main>
    );
}
const StyledSpacer = styled.span`
  display: block;
  height: 40px;
`;
