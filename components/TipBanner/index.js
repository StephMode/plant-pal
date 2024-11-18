import styled from "styled-components"
import Button from "../Button";
import Link from "next/link";
import Image from "next/image";

export default function TipBanner ({randomTip}) {
    
    
    return(
        <StyledBannerContainer bannerColor={randomTip?.bannerColor|| "var(--green-main)"}  >
            <p>{randomTip.title}</p>
            <Link href={`/tips/${randomTip.id}`}>
                <Button buttonText="Learn more"/>
            </Link>
            <StyledImageContainer>
                <StyledImage src={randomTip.imageURL} alt={randomTip.title} fill={true} />
            </StyledImageContainer>
        </StyledBannerContainer>
    )
}

const StyledBannerContainer = styled.section`
    width: 95%;
    margin: 0 0 20px 0;
    background-color:  ${(props) => `${props.bannerColor}`};
    border-radius: 20px;
    color: var(--white);
`;
const StyledImageContainer = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  transition: all 0.45s ease;
`;
const StyledImage = styled(Image)`
  width: 200%;
  height: auto;
  text-align: center;
  object-fit: cover;
`;