import { useState } from "react"

export default function PlantDeleteButton({ handleDeletePlant }) {
const [showDeleteModal, setShowDeleteModal] = useState(false);

function handleToggle() {
    setShowDeleteModal(!showDeleteModal);
};






return(
    <>
    <button type="button" onClick={handleToggle}>Delete Plant</button>

    {showDeleteModal === true ? (
        <>
            <button type="button" onClick={handleToggle}>Cancel</button>
            <button type="button" onClick={handleDeletePlant}>Delete</button>
        </>
    ) : null
    }
    </>
)

};