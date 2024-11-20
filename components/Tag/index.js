import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function Tag({id, headline, subHeadline, image, tagType }) {
    // wir können die compo so bauen: prop hashtagType gibt vor, welche Art von hashtag und dementsprechend conditional render
    // TipDetails und PlantDetails geben dann jweils die detail props für den Einzelhashtag runter
  
    return (
      <Link href={`/${tagType}/${id}`}>
        <StyledTag>
       
       <StyledImage src={image} width={50} height={50} alt={`"image of ${headline}"`}/>
        <div>
        <StyledH4>{headline}</StyledH4>
        <StyledH5>{subHeadline}</StyledH5>
        </div>
        </StyledTag>
      </Link>
  )
}



const StyledTag = styled.article`
  min-width: 200px;
  display: flex;
  gap: 15px;
  border-radius: 40px;
  background-color: var(--green-light);
  padding: 10px 25px 10px 10px;
  transition: all ease-in-out 0.5s;

  &:hover{
    background-color: var(--green-main);
    color: var(--white)
  }
`;

const StyledImage = styled(Image)`
  border-radius: 50px;
`;


const StyledH4 = styled.h4`
`;

const StyledH5 = styled.h5`
  color: var(--gray);
  font-weight: normal;
  
`;
