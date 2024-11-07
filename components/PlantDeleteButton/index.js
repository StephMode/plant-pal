import Modal from "../Modal";

export default function PlantDeleteButton({ onDeletePlant, name, id }) {
  const Info = "Do you really want to delete {name}?";

  return (
    <Modal handleDeletePlant={onDeletePlant} name={name} id={id} Info={Info} />
  );
}
