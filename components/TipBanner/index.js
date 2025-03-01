import styled from "styled-components"
import Link from "next/link";
import Image from "next/image";

export default function TipBanner ({randomTip,progress,


    handleMouseLeave,
    handleMouseHover}) {
    
    
    return(
        <StyledLink href={`/tips/${randomTip._id}`} bannerColor={randomTip?.bannerColor|| "var(--green-main)"} >
            <StyledBannerContainer  onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}>
                <StyledBannerTextContainer>
                    <p>Care tip: {randomTip.shortBodyContent}</p> 
                    <StyledBannerButton type="button">Read More</StyledBannerButton>
                </StyledBannerTextContainer>
                <StyledImageContainer>
                    <StyledImage src={randomTip.imageURL} alt={randomTip.title} fill={true} />
                </StyledImageContainer>
            </StyledBannerContainer>
            <StyledProgressBarWrapper>
                    <StyledProgressBar progressCss={progress || 100 }/>
            </StyledProgressBarWrapper>
        </StyledLink>
    )
}
const StyledLink = styled(Link)`
    width: 100%;
    margin: 0 0 20px 0;
    background-color: ${(props) => `var(${props.bannerColor})`};
    border-radius: 20px;
    overflow: hidden;
    &:hover {
        background-color:${(props) => `var(${props.bannerColor}-dark)`};
    }
`;
const StyledBannerContainer = styled.div`
    width: 100%;

    color: var(--white);
    display:flex;
    justify-content: space-between;
    

`;
const StyledBannerTextContainer = styled.section`  
    padding: 13px 10px 20px 20px;
    font-size: 20px;

    @media (min-width: 750px) {
        padding: 25px;
        font-size: 25px;
    }
`;
const StyledBannerButton = styled.button`
    background-color: var(--white);
    border: none;
    border-radius: 20px;
    padding: 8px 15px;
    margin-top: 15px;
    cursor: pointer;
`;
const StyledImageContainer = styled.div`
  width: 125px;
  min-width: 125px;
  height: auto;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.3);
  border-radius: 20px 20px 0 20px;

  @media (min-width: 750px) {
    min-height: 150px;
    min-width: 30%;
  }
`;
const StyledImage = styled(Image)`
  width: 200%;
  height: auto;
  text-align: center;
  object-fit: cover;
`;
const StyledProgressBarWrapper =  styled.div`
    width: 100%;
    background-color: var(--gold-dark);
`;
const StyledProgressBar = styled.div`
    width:  ${(props) => `${props.progressCss}%`};
    display: block;
    height: 5px;
    background-color: var(--gold);
    border-radius: 3px;
`;
