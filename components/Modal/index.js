import styled from "styled-components";
import Button from "../Button";

export default function Modal({ showModal, onToggleModal, modalContent, modalContentButtonText, modalContentFunction }) {

  return (
      showModal && (
        <StyledModalBackground>
          <StyledModal>
              {modalContent}
            <StyledModalButtonContainer>
              {/* Die Buttons hier entfernen und in die zu rendernde Komponente packen */}
              <Button buttonText="Cancel" handleButtonFunction={onToggleModal} />
              <Button buttonText={modalContentButtonText} handleButtonFunction={modalContentFunction} />
            </StyledModalButtonContainer> 
          </StyledModal>
        </StyledModalBackground>
      ));
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



