import { useRouter } from "next/router";
import PlantDetails from "/components/PlantDetails/";
import toast from 'react-hot-toast';

export default function PlantDetailsPage({ plants, onDeletePlant, handleEditPlant, handleAddPlant, handleToggleModal, showModal, isEdit, isDelete }) {
  const router = useRouter();

  const { id } = router.query;

  const plant = plants.find((plant) => plant.id === id);


  if (!plant) {
    return <p>Plant not found!</p>;
  }

  return (
    <main>
      <h1>Plant Details</h1>
      <PlantDetails plant={plant} onDeletePlant={onDeletePlant} id={id} handleEditPlant={handleEditPlant} handleToggleModal={handleToggleModal} showModal={showModal} isDelete={isDelete} isEdit={isEdit} handleAddPlant={handleAddPlant} />
    </main>
  );
}
