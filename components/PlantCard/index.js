import Image from "next/image";
import styled from "styled-components";
import PlantOwnedButton from "../PlantOwnedButton";

export default function PlantCard({
  image,
  name,
  botanicalName,
  plantId,
  handleToggleOwned,
  isOwned,
}) {
  return (
    <StyledCard>
      <StyledImageContainer>
        <PlantOwnedButton
          plantId={plantId}
          handleToggleOwned={handleToggleOwned}
          isOwned={isOwned}
        />
        <StyledImage src={image} alt={name} />
      </StyledImageContainer>
      <h2>{name}</h2>
      <h3>{botanicalName}</h3>
    </StyledCard>
  );
}

const StyledCard = styled.article`
  background-color: var(--green-light);
  color: var(--white);
  padding: 18px;
  border-radius: 25px;
  margin-bottom: 20px;
`;

const StyledImageContainer = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
`;

const StyledImage = styled.img`
  width: 200%;
  height: auto;
  text-align: center;
  border-radius: 35px;
`;
