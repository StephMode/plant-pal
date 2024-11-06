import { useState } from "react"

export default function PlantDeleteButton({ id, handleDeletePlant }) {
const [showDeleteModal, setShowDeleteModal] = useState(false);

function handleToggle() {
    setShowDeleteModal(!showDeleteModal);
};



// if(plants.length === 0) {
//     show info text that list is empty
//     render Add plant button
// }



return(
    <>
    <button type="button" onClick={handleToggle}>Delete Plant</button>

    {showDeleteModal === true ? (
        <>
            <button type="button" onClick={handleToggle}>Cancel</button>
            <button type="button" onClick={() => handleDeletePlant(id)}>Delete</button>
        </>
    ) : null
    }
    </>
)

};