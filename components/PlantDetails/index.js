import Image from "next/image";
import styled from "styled-components";
import Tag from "../Tag";
import Button from "../Button";
import Modal from "../Modal";
import PlantDeleteSection from "../PlantDeleteSection";
import Form from "../Form";
import PlantOwnedButton from "../PlantOwnedButton";
import ReminderCard from "../ReminderCard";
import ReminderForm from "../ReminderForm";
import { RiDropLine } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa6";
import { RiDropFill } from "react-icons/ri";
import { RiContrastDrop2Fill } from "react-icons/ri";
import { IoIosSunny } from "react-icons/io";
import { IoIosPartlySunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { GiPowder } from "react-icons/gi";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { useRouter } from "next/router";

export default function PlantDetails({ 
  plant, 
  handleToggleModal, 
  isDelete, 
  isEdit, 
  showModal, 
  handleEditPlant, 
  handleAddPlant, 
  onDeletePlant, 
  tipsToBeTagged,
  handleToggleOwned,
  reminders,
  isReminder,
  handleAddReminder,
  currentDate
  }) {
  const router = useRouter();

  const relatedReminders = reminders.filter((reminder) => reminder.relatedPlant === plant.id);
  const relatedTips = tipsToBeTagged.filter((tip) => tip.relatedPlants.includes(plant.id));

  return (
    <>
      <StyledImageContainer>
            <StyledImage src={plant.imageUrl} alt={plant.name} fill />
            <StyledPlantOwnedButtonWrapper>
              <PlantOwnedButton 
                isOwned={plant.isOwned}
                plantId={plant.id}
                onClick={() => handleToggleOwned(plant.id)}
              />
            </StyledPlantOwnedButtonWrapper>
      </StyledImageContainer>

      <StyledPlantContainer>
        <StyledTopSection>
          <StyledTopSectionHeadlineContainer>
            <StyledH2>{plant.name}</StyledH2>
            <StyledH3>{plant.botanicalName}</StyledH3>
          </StyledTopSectionHeadlineContainer>
          <StyledTopSectionIconContainer>
            <Button
              buttonText={<RiCalendarScheduleFill />}
              handleButtonFunction={() => handleToggleModal("Reminder")}
            />
            <Button
              buttonText={<FaPen />}
              handleButtonFunction={() => handleToggleModal("Edit")}
            />
          </StyledTopSectionIconContainer>
        </StyledTopSection>
        
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
        <StyledEditDeleteSection>
          <Button buttonText={<FaTrashAlt />} handleButtonFunction={() => handleToggleModal("Delete")} buttonRole={"deleteButton"}/>
        </StyledEditDeleteSection>
        {relatedReminders.length > 0 ? <StyledTipH3>Reminders:</StyledTipH3> : null}
        <StyledListContainer>
            {relatedReminders
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((reminder) => 
                <li key={reminder.id}>
                    <ReminderCard task={reminder.task} date={reminder.date} />
                </li>)}
            </StyledListContainer>

        <StyledTipH3>Related Care Tips:</StyledTipH3>

          <StyledListContainer>
              {relatedTips.map((tip) => (
                <li key={tip.id}>
                  <Tag
                    tagId={tip.id}
                    tagType={"tips"}
                    headline={tip.title}
                    subHeadline={tip.shortBodyContent}
                    image={tip.imageURL}
                  />
                </li>
              ))}
            
          </StyledListContainer>

      </StyledPlantContainer>

      {showModal && (
        <Modal
          modalContent={
            isEdit ? (
              <Form
                handleAddPlant={handleAddPlant}
                plant={plant}
                buttonText={"Edit"}
                handleToggleModal={handleToggleModal}
                handleEditPlant={handleEditPlant}
              />
            ) : isDelete ? (
              <PlantDeleteSection
                plant={plant}
                buttonText={"Delete"}
                onDeletePlant={onDeletePlant}
                id={plant.id}
                handleToggleModal={handleToggleModal}
              />
            ) : isReminder ? (
              <ReminderForm
                plant={plant.name}
                handleToggleModal={handleToggleModal}
                handleAddReminder={handleAddReminder}
                id={plant.id}
                currentDate={currentDate}
              />
            )
             : (
              "This is an error, please reload page."
            )
          }
        />
      )}

        <StyledIconContainer onClick={() => router.back()} type="button">
          <FaChevronLeft/>
        </StyledIconContainer>
        
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
const StyledTipH3 = styled.h3`
  margin: 20px 0;
  text-align: left;
  color: var(--green-main);
  font-weight: bold;
  font-size: 20px;
`;
const StyledImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  border-radius: 35px;
  box-shadow: 0 0 51px rgba(0, 0, 0, 0.3);

  @media (min-width: 750px) {
    height: 500px;
  }
`;
const StyledImage = styled(Image)`
  width: 200%;
  height: auto;
  text-align: center;
  object-fit: cover;
`;
const StyledPlantOwnedButtonWrapper = styled.div`
  position: relative;
  top: 45px;
  right: 20px;
`;
const StyledIconContainer = styled.button `
    background-color: var(--green-light);
    border-radius: 40px;
    border: none;
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
  font-size: 20px;
  gap: 10px;
  margin-bottom: 5px;
  flex-wrap: wrap;
`;
const StyledTopSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
`;

const StyledTopSectionHeadlineContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 3;
`;

const StyledTopSectionIconContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
  flex-grow: 1;
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

const StyledListContainer = styled.ul`
  display: flex;
  justify-content:flex-start;
`;

const StyledEditDeleteSection = styled.section`
  display: flex;
  width: 100%;
  margin-top: 25px;
`;
