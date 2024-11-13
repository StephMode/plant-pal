import styled from "styled-components";
export default function PlantDeleteSection({ onDeletePlant, id, handleToggleModal, plant, buttonText }) {


    return (
        <StyledDeleteSection>
            <p>
                Do you really want to delete
                <b> {plant.name} </b>  ?
            </p>
            <StyledModalButtonContainer>
                <StyledButton type="button" onClick={() => handleToggleModal("Delete")}>
                    Cancel
                </StyledButton>
                <StyledButton type="button" onClick={() => onDeletePlant(id)}>
                    {buttonText}
                </StyledButton>
            </StyledModalButtonContainer>
        </StyledDeleteSection>

    );
}

const StyledModalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledButton = styled.button`
  background-color: var(--brown);
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
`;

const StyledDeleteSection = styled.section`
padding: 30px; 
`

