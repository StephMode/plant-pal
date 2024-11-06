import { useState } from "react"
import styled from "styled-components";

export default function PlantDeleteButton({ name, id, handleDeletePlant }) {
const [showDeleteModal, setShowDeleteModal] = useState(false);

function handleToggleModal() {
    setShowDeleteModal(!showDeleteModal);
};

return (
    <>
    <StyledButton type="button" onClick={handleToggleModal}>Delete Plant</StyledButton>

    {showDeleteModal === true ? (
        <StyledDeleteModalBackground>
            <StyledDeleteModal>
                <p>Do you really want to delete <StyledPlantName>{name}</StyledPlantName>?</p>
                <StyledDeleteModalButtonContainer>
                    <StyledButton type="button" onClick={handleToggleModal}>Cancel</StyledButton>
                    <StyledButton type="button" onClick={() => handleDeletePlant(id)}>Delete</StyledButton>
                </StyledDeleteModalButtonContainer>
            </StyledDeleteModal>
        </StyledDeleteModalBackground>
    ) : null
    }
    </>
)

};


const StyledDeleteModalBackground = styled.section`
    content: "";
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const StyledDeleteModal = styled.section`
    background-color: var(--white);
    border-radius: 35px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 40%;
    padding: 0 20px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

const StyledDeleteModalButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;

`;

const StyledButton = styled.button`
    background-color: var(--brown);
    padding: 8px 20px;
    border: none;
    border-radius: 20px;
`;


const StyledPlantName = styled.span`
    font-weight: bold;
`;
