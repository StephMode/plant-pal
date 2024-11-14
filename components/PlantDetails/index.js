import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import EditDeleteButton from "../EditDeleteButton";
import Modal from "../Modal";
import PlantDeleteSection from "../PlantDeleteSection";
import Form from "../Form";
import { RiDropLine } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa6";
import { RiDropFill } from "react-icons/ri";
import { RiContrastDrop2Fill } from "react-icons/ri";
import { IoIosSunny } from "react-icons/io";
import { IoIosPartlySunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { GiPowder } from "react-icons/gi";

export default function PlantDetails({ plant, handleToggleModal, isDelete, isEdit, showModal, handleEditPlant, handleAddPlant, onDeletePlant }) {
  return (
    <>
    <StyledImageContainer>
          <StyledImage src={plant.imageUrl} alt={plant.name} fill />
        </StyledImageContainer>
      
      <StyledPlantContainer>
      <StyledH2>{plant.name}</StyledH2>
      <StyledH3>{plant.botanicalName}</StyledH3>
      <StyledDescription>{plant.description}</StyledDescription>
        <StyledPlantNeedsContainer>
            {plant.lightNeed === "Full Shade" ? (
              <StyledIconSection>
                <IoMdMoon />
                <p>Full shade</p>
              </StyledIconSection>
            ) : plant.lightNeed === "Partial Shade" ? (
              <StyledIconSection>
                <IoIosPartlySunny />
                <p>Partial shade</p>
              </StyledIconSection>
            ) : plant.lightNeed === "Full Sun" ? (
              <StyledIconSection>
                <IoIosSunny /> 
                <p>Full sun</p>
              </StyledIconSection>
            ) : null}

            {plant.waterNeed === "Low" ? (
              <StyledIconSection>
                <RiDropLine /> 
                <p>Low water need</p>
              </StyledIconSection>
            ) : plant.waterNeed === "Medium" ? (
              <StyledIconSection>
                <RiContrastDrop2Fill />
                <p>Medium water need</p>
              </StyledIconSection>
            ) : plant.waterNeed === "High" ? (
              <StyledIconSection>
                <RiDropFill />
                <p>High water need</p>
              </StyledIconSection>
            ) : null}

          <StyledIconSection>
            <GiPowder />
            <p>Fertilize in:</p>
            <StyledFertilizerUl>
              {plant.fertiliserSeason.map((season) => (
                <StyledFertilizerLi key={season}>{season} </StyledFertilizerLi>
              ))}
            </StyledFertilizerUl>
          </StyledIconSection>
        </StyledPlantNeedsContainer>
        
      </StyledPlantContainer>
      
      <EditDeleteButton buttonText={"Edit"} handleButtonFunction={() => handleToggleModal("Edit")} />
      <EditDeleteButton
        buttonText={"Delete"}
        handleButtonFunction={() => handleToggleModal("Delete")}
      />

      {showModal &&
        <Modal modalContent={
          isEdit ? <Form handleAddPlant={handleAddPlant}
            plant={plant}
            buttonText={"Edit"}
            handleToggleModal={handleToggleModal}
            handleEditPlant={handleEditPlant}
          /> :
            isDelete ? <PlantDeleteSection plant={plant} buttonText={"Delete"} onDeletePlant={onDeletePlant} id={plant.id} handleToggleModal={handleToggleModal} /> :
              "This is an error, please reload page."
        } />}

      <Link href="/">
      <StyledIconContainer>
        <FaChevronLeft />
      </StyledIconContainer>
      </Link>
    </>
  );
}

const StyledPlantContainer = styled.section`
  display: block;
  margin: 0;
  width: 100%;
  padding: 20px;

  @media (min-width: 768px) {
    width: 70%;
  }
`;

const StyledPlantNeedsContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  border-radius: 35px;
`;

const StyledImage = styled(Image)`
  width: 200%;
  height: auto;
  text-align: center;

  object-fit: cover;
`;
const StyledIconContainer = styled.span `
    background-color: var(--green-light);
    border-radius: 40px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-size: 30px;
    position: absolute;
    top: 70px;
    left: 20px;
 `;
const StyledIconSection = styled.section`
  display: flex;
  align-items: center;
  color: var(--green-main);
  font-weight: bold;
  font-size: 20px;
  gap: 10px;
  margin-bottom: 5px;
  flex-wrap: wrap;
`;
 const StyledH2 = styled.h2`
  margin-bottom: 2px;
 `;
 const StyledH3 = styled.h3`
  margin-bottom: 15px;
  font-style: italic;
  font-weight: normal;
 `;
 const StyledDescription = styled.p`
  margin-bottom: 20px;
  text-align: justify;
 `;
 const StyledFertilizerUl = styled.ul`
  gap: 5px;
  margin : 0 0 0 30px;
 `;
 const StyledFertilizerLi = styled.li`
  color: var(--white);
  background-color: var(--green-light);
  padding: 3px 10px 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: normal;
`;
