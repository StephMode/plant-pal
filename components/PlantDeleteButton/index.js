import { useState } from "react"
import styled from "styled-components";

export default function PlantDeleteButton({ id, handleDeletePlant }) {
const [showDeleteModal, setShowDeleteModal] = useState(false);

function handleToggleModal() {
    setShowDeleteModal(!showDeleteModal);
};


return(
    <>
    <StyledButton type="button" onClick={handleToggleModal}>Delete Plant</StyledButton>

    {showDeleteModal === true ? (
        <StyledDeleteModal>
            <p>Are you sure you want to delete PLANTNAME?</p>
            <StyledDeleteModalButtonContainer>
                <button type="button" onClick={handleToggleModal}>Cancel</button>
                <button type="button" onClick={() => handleDeletePlant(id)}>Delete</button>
            </StyledDeleteModalButtonContainer>
        </StyledDeleteModal>
    ) : null
    }
    </>
)

};


const StyledDeleteModal = styled.section`
    background-color: rgba(128, 128, 128, 0.6);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 40%;
    border-radius: 35px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    z-index: 110;

    /* :before {
        content: "";
        background-color: rgba(128, 128, 128, 0.3);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }; */

`;

const StyledDeleteModalButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;

`;


const StyledButton = styled.button`
    background-color: var(--brown);
    padding: 5px;
    border: none;
    border-radius: 10px;
`;

//aside, section as alternative to div