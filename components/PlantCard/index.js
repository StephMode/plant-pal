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

  function handleToggleOwnedButtonClick (event) {
    event.preventDefault();
    handleToggleOwned(plantId);
  }

  return (
    <StyledCard>
      <Link href={`/plants/${plantId}`}>
      <StyledImageContainer>
        <PlantOwnedButton
          plantId={plantId}
          onClick={handleToggleOwnedButtonClick}
          isOwned={isOwned}
        />
        <StyledImage src={image} alt={name} fill={true} />
      </StyledImageContainer>    
      <StyledCardTitleContainer>
        <StyledH2>{name}</StyledH2>
        <StyledH3>{botanicalName}</StyledH3>
        </StyledCardTitleContainer>
      </Link>
    </StyledCard>
  );
}

const StyledCard = styled.article`
  background-color: var(--white);
  color: var(--white);
  padding: 0;
  border-radius: 25px;
  margin-bottom: 20px;



  @media (max-width: 750px) {
    width: 170px;
  }
`;


const StyledImageContainer = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.3);
  border-radius: 20px;

  &:hover {
    box-shadow: 0px 5px 40px -10px var(--white-dark);
    transition: all 0.45s ease 0s;
  }

  @media (max-width: 750px) {
    width: 170px;
  }
`;

const StyledImage = styled(Image)`
  width: 200%;
  height: auto;
  text-align: center;
  object-fit: cover;
`;

const StyledCardTitleContainer = styled.div`
&:hover {
    color: var(--green-light-dark);
    transition: all 0.45s ease 0s;
  }
`;

const StyledH2 = styled.h2`
  padding: 10px 5px 0 5px;
  font-size: 20px;
  max-width: 300px;
`;

const StyledH3 = styled.h3`
  padding: 0px 5px;
  font-weight: 300;
  font-style: italic;
  font-size: 16px;
`;
