import Modal from "../Modal";
import styled from "styled-components";
import { useState } from "react";

export default function MultifunctionalButton({
  onDeletePlant,
  plant,
  id,
  buttonText,
}) {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <StyledButton type="button" onClick={handleToggleModal}>
        {buttonText}
      </StyledButton>

      <Modal
        handleButtonFunction={() => onDeletePlant(id)}
        showModal={showModal}
        handleToggleModal={handleToggleModal}
        buttonText={buttonText}
        plant={plant}
      />
    </>
  );
}

const StyledButton = styled.button`
  background-color: var(--brown);
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
`;
