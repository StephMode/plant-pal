import styled from "styled-components"

export default function IntroPage() {
    return(
        <StyledIntroContainer>
        </StyledIntroContainer>
    )
}

const StyledIntroContainer = styled.section`
    background: no-repeat url(/intro.jpg) center center;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    background-size: cover;
`;