import styled from "styled-components";
import Image from "next/image";
// import Link from "next/link"

export default function TipCard({
  // tipId,
  image,
  title,
  shortBodyContent
}) {
  return (
    <StyledCard>
      <StyledImageContainer>
        <StyledImage src={image} alt={title} fill={true} />
      </StyledImageContainer>
      {/* <Link href={`/plants/${plantId}`}> */}
        <StyledH2>{title}</StyledH2>
        <StyledH3>{shortBodyContent}</StyledH3>
      {/* </Link> */}
    </StyledCard>
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
