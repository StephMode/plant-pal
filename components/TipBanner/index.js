import styled from "styled-components"
import Link from "next/link";
import Image from "next/image";

export default function TipBanner ({randomTip}) {
    
    
    return(
        <StyledLink href={`/tips/${randomTip.id}`}>
            <StyledBannerContainer bannerColor={randomTip?.bannerColor|| "var(--green-main)"} >
                <StyledBannerTextContainer>
                    <p>Care tip: {randomTip.shortBodyContent}</p> 
                    <StyledBannerButton type="button">Read More</StyledBannerButton>
                </StyledBannerTextContainer>
                <StyledImageContainer>
                    <StyledImage src={randomTip.imageURL} alt={randomTip.title} fill={true} />
                </StyledImageContainer>
            </StyledBannerContainer>
        </StyledLink>
    )
}
const StyledLink = styled(Link)`
    width: 95%;
    margin: 0 0 20px 0;
`;
const StyledBannerContainer = styled.section`
    width: 100%;
    background-color: ${(props) => `var(${props.bannerColor})`};
    border-radius: 20px;
    color: var(--white);
    display:flex;
    justify-content: space-between;
    
    &:hover {
        background-color:${(props) => `var(${props.bannerColor}-dark)`};
    }
`;
const StyledBannerTextContainer = styled.section`  
    padding: 13px 10px 20px 20px;
    font-size: 20px;
`;
const StyledBannerButton = styled.button`
    background-color: var(--white);
    border: none;
    border-radius: 20px;
    padding: 8px 15px;
    margin-top: 15px;
`;
const StyledImageContainer = styled.div`
  width: 125px;
  min-width: 125px;
  height: auto;
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
