import styled from "styled-components";
import PlantOwnedButton from "../PlantOwnedButton";
import Image from "next/image";
import Link from "next/link"

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
          onClick={() => handleToggleOwned(plantId)}
          isOwned={isOwned}
        />
        <StyledImage src={image} alt={name} fill={true} />
      </StyledImageContainer>
      <Link href={`/plants/${plantId}`}>
        <StyledH2>{name}</StyledH2>
        <StyledH3>{botanicalName}</StyledH3>
      </Link>
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
  position: relative;
  margin-bottom: 15px;
`;

const StyledImage = styled(Image)`
  width: 200%;
  height: auto;
  text-align: center;
  border-radius: 35px;
  object-fit: cover;
`;

const StyledH2 = styled.h2`
  padding: 10px 5px;
`;

const StyledH3 = styled.h3`
  padding: 0px 5px;
  font-weight: 300;
  font-style: italic;
`;
