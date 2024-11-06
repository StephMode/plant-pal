import { useState } from "react"

export default function PlantDeleteButton() {
const [showDeleteModal, setShowDeleteModal] = useState(false);

function handleDelete() {
    setShowDeleteModal(!showDeleteModal);



}



return(
    <>
    <button type="button" onClick={handleDelete}>Delete Plant</button>

    {showDeleteModal === true ? (
        <button type="button">Cancel</button>
    ) : null
    }
    </>
)

};