import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";


export default function TipDetails({ tip }) {
  return (
    <>
      <StyledImageContainer>
            <StyledImage src={tip.imageURL} alt={tip.title} fill />
      </StyledImageContainer>
      
      <StyledPlantContainer>
      <StyledTopSection>
        <StyledH2>{tip.title}</StyledH2>
      </StyledTopSection>
      <StyledH3>{tip.shortBodyContent}</StyledH3>
      
      <StyledDescription>{tip.bodyContent}</StyledDescription>

      </StyledPlantContainer>


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
 const StyledTopSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
 `;
 const StyledH2 = styled.h2`
  margin-bottom: 2px;
  max-width: 260px;
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
  justify-content: flex-start;
 `;
 const StyledFertilizerLi = styled.li`
  color: var(--white);
  background-color: var(--green-light);
  padding: 3px 10px 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: normal;
`;
const StyledEditDeleteSection = styled.section`
  display: flex;
  width: 100%;
  margin-top: 25px;
`;