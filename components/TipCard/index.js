import styled from "styled-components";
import Image from "next/image";
import Link from "next/link"

export default function TipCard({
  tipId,
  image,
  title,
  shortBodyContent
}) {
  return (
    <Link href={`/tips/${tipId}`}>
      <StyledCard>
        <StyledImageContainer>
          <StyledImage src={image} alt={title} fill={true} />
        </StyledImageContainer>
        <StyledCardTitleContainer>
          <StyledH2>{title}</StyledH2>
          <StyledH3>{shortBodyContent}</StyledH3>
        </StyledCardTitleContainer>
      </StyledCard>
    </Link>
  );
}

const StyledCard = styled.article`
  background-color: var(--white);
  color: var(--black);
  padding: 0;
  border-radius: 25px;
  margin-bottom: 20px;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const StyledImageContainer = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  transition: all 0.45s ease;

  &:hover {
    box-shadow: 0px 5px 40px -10px var(--white-dark);
  }

  @media (max-width: 750px) {
    width: 328px;
  }
`;

const StyledImage = styled(Image)`
  width: 200%;
  height: auto;
  text-align: center;
  object-fit: cover;
`;

const StyledCardTitleContainer = styled.div`
  transition: all 0.45s ease;

  &:hover {
    color: var(--green-light-dark);
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
  max-width: 320px;
`;
