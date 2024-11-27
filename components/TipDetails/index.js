import Image from "next/image";
import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa6";
import { useRouter } from "next/router";
import Tag from "../Tag";
import { useState } from "react";
import NoteCard from "../NoteCard";
import { FaPlus } from "react-icons/fa";

export default function TipDetails({
  tip,
  plantsToBeTagged,
  notesData,
  routerQuery,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
}) {
  const router = useRouter();
  const [noRelatedPlants, setNoRelatedPlants] = useState(false);

  const relatedPlants = tip.relatedPlants.map((relatedPlant) => relatedPlant);
  const relatedPlantObject = relatedPlants.map((plantID) =>
    plantsToBeTagged.find((plant) => plant.id === plantID)
  );

  const undefinedCount = relatedPlantObject.filter(
    (plant) => plant === undefined
  ).length;

  const noRelatedPlantsChecker = () => {
    if (undefinedCount === relatedPlantObject.length) {
      setNoRelatedPlants(true);
    }
  };

  return (
    <>
      <StyledImageContainer>
        <StyledImage src={tip.imageURL} alt={tip.title} fill />
      </StyledImageContainer>

      <StyledIconContainer onClick={() => router.back()} type="button">
        <FaChevronLeft />
      </StyledIconContainer>

      <StyledTipContainer>
        <StyledH2>{tip.title}</StyledH2>
        <StyledDescription>{tip.bodyContent}</StyledDescription>

        <StyledH3>Related Plants</StyledH3>
        <StyledTagContainer>
          {relatedPlantObject.map((plant) =>
            plant === undefined ? null : (
              <li key={plant.id}>
                <Tag
                  tagId={plant.id}
                  tagType={"plants"}
                  headline={plant.name}
                  subHeadline={plant.botanicalName}
                  image={plant.imageUrl}
                />
              </li>
            )
          )}
        </StyledTagContainer>
      </StyledTipContainer>
      <StyledNoteWrapper>
        <AddNodeButton type="Button" onClick={() => handleAddNote(routerQuery)}>
          <FaPlus /> Add Note
        </AddNodeButton>
        <StyledNoteContainer>
          {notesData
            .filter((note) => note.noteLocation === String(routerQuery))
            .map((note) => (
              <li key={note.id}>
                <NoteCard
                  headline={note.headline}
                  note={note.note}
                  handleDeleteNote={handleDeleteNote}
                  id={note.id}
                  handleEditNote={handleEditNote}
                  routerQuery={routerQuery}
                  dateCreated={note.dateCreated}
                  tipTitle={tip.title}
                />
              </li>
            ))}
        </StyledNoteContainer>
      </StyledNoteWrapper>
    </>
  );
}

const StyledTipContainer = styled.section`
  display: block;
  margin: 0;
  width: 100%;
  padding: 20px;

  @media (min-width: 768px) {
    width: 70%;
  }
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  border-radius: 35px;
  box-shadow: 0 0px 51px rgba(0, 0, 0, 0.3);

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

const StyledIconContainer = styled.button`
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
  border: none;
`;

const StyledH2 = styled.h2`
  margin-bottom: 13px;
`;

const StyledDescription = styled.p`
  margin-bottom: 30px;
  text-align: justify;
`;

const StyledH3 = styled.h3`
  margin-bottom: 20px;
  text-align: left;
`;

const StyledTagContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
`;
const StyledNoteContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 15px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AddNodeButton = styled.button`
  background-color: var(--brown);
  padding: 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  transition: 0.5s ease-in-out;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StyledNoteWrapper = styled.section`
  width: 100%;
  padding: 20px;
  @media (min-width: 768px) {
    width: 72%;
  }
`;
