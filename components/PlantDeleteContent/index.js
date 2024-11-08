import Button from "../Button";
import Modal from "../Modal";
import styled from "styled-components";

export default function PlantDeleteContent({ onDeletePlant, name, id, onToggleModal, showModal }) {
  const deletionConfirmText = (
    <p>
      Do you really want to delete <StyledPlantName>{name}</StyledPlantName>?
    </p>
  );

  const deleteButtonText = "Delete Plant";


  return (
    <>
      <Button buttonText={deleteButtonText} handleButtonFunction={onToggleModal} />
      <Modal 
      showModal={showModal}
      onToggleModal={onToggleModal}
      modalContent={deletionConfirmText}
      modalContentButtonText={deleteButtonText}
      modalContentFunction={() => onDeletePlant(id)}
      />
     </>
  );
}


const StyledPlantName = styled.span`
  font-weight: bold;
`;