import styled from "styled-components";
import AddPlantForm from "../AddPlantForm";
export default function Modal({
  buttonText,
  handleButtonFunction,
  showModal,
  handleToggleModal,
  plant,
}) {
  return (
    <>
      {showModal && (
        <StyledModalBackground>
          <StyledModal>
            {buttonText === "Delete" && (
              <>
                <p>
                  Do you really want to delete
                  <StyledPlantName> {plant.name} </StyledPlantName>
                </p>
                <StyledModalButtonContainer>
                  <StyledButton type="button" onClick={handleToggleModal}>
                    Cancel
                  </StyledButton>
                  <StyledButton type="button" onClick={handleButtonFunction}>
                    {buttonText}
                  </StyledButton>
                </StyledModalButtonContainer>
              </>
            )}

            {buttonText === "Edit" && (
              <AddPlantForm
                plant={plant}
                buttonText={buttonText}
                handleToggleModal={handleToggleModal}
              />
            )}
          </StyledModal>
        </StyledModalBackground>
      )}
    </>
  );
}

const StyledModalBackground = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledModal = styled.section`
  background-color: var(--white);
  border-radius: 35px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 40%;
  padding: 0 20px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

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

const StyledPlantName = styled.span`
  font-weight: bold;
`;
