import { useRouter } from "next/router";
import PlantDetails from "/components/PlantDetails/";

export default function PlantDetailsPage({ 
  plants, 
  onDeletePlant, 
  handleEditPlant, 
  handleAddPlant, 
  handleToggleModal, 
  showModal, 
  isEdit, 
  isDelete, 
  tips,
  handleToggleOwned,
  reminders,
  isReminder,
  handleAddReminder
  }) {
  const router = useRouter();

  const tipsToBeTagged = tips;

  const { id } = router.query;

  const plant = plants.find((plant) => plant._id === id);

  if (!plant) {
    return <p>Plant not found!</p>;
  }

  return (
    <main>
      <h1>Plant Details</h1>
      <PlantDetails 
        plant={plant} 
        onDeletePlant={onDeletePlant} 
        handleEditPlant={handleEditPlant} 
        handleToggleModal={handleToggleModal} 
        showModal={showModal} 
        isDelete={isDelete} 
        isEdit={isEdit} 
        handleAddPlant={handleAddPlant} 
        tipsToBeTagged={tipsToBeTagged}
        handleToggleOwned={handleToggleOwned}
        reminders={reminders}
        isReminder={isReminder}
        handleAddReminder={handleAddReminder}
         />
    </main>
  );
}
