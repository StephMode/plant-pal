import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import { useRouter } from "next/router";
import { plants as initialPlants } from "/lib/plantData";
import Tag from "../Tag";


export default function TipDetails({ tip }) {
  const router = useRouter();

  const relatedPlants = tip.relatedPlants.map((relatedPlant) => relatedPlant);
  const relatedPlantObject = relatedPlants.map((plantID) => initialPlants.find((plant) => plant.id === plantID));


  return (
    <>
      <StyledImageContainer>
            <StyledImage src={tip.imageURL} alt={tip.title} fill />
      </StyledImageContainer>
      
      <StyledTipContainer>
        <StyledH2>{tip.title}</StyledH2>
        <StyledDescription>{tip.bodyContent}</StyledDescription>
      </StyledTipContainer>

     
        <StyledIconContainer onClick={() =>  router.back()} type="button">
          <FaChevronLeft />
        </StyledIconContainer>
        <h3>Related Plants</h3>
        <ul>
          {relatedPlantObject.map((plant) => (
            <li key={plant.id}>
              <Tag
                id={plant.id}
                tagType={"plants"}
                headline={plant.name}
                subHeadline={plant.botanicalName}
                image={plant.imageUrl}
              />              
            </li>
          ))}
          
        </ul>
        

        
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

const StyledIconContainer = styled.button `
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
  max-width: 260px;
 `;

 const StyledDescription = styled.p`
  margin-bottom: 20px;
  text-align: justify;
 `;
