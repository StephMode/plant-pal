import Modal from "../Modal";
import styled from "styled-components";

export default function PlantDeleteButton({ onDeletePlant, name, id }) {
  const deletionConfirmText = (
    <p>
      Do you really want to delete <StyledPlantName>{name}</StyledPlantName>?
    </p>
  );

  const deleteButtonText = "Delete Plant";


  return (
    <Modal 
    modalMessage={deletionConfirmText}
    buttonText={deleteButtonText}
    handleButtonFunction={() => onDeletePlant(id)}
     />
  );
}


const StyledPlantName = styled.span`
  font-weight: bold;
`;