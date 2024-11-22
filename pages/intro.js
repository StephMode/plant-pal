import styled from "styled-components"
import Image from "next/image";

export default function IntroPage() {
    return(
        <StyledIntroContainer>
            <StyledImageContainer>
                <Image src="/logo-main.svg" width={200} height={50} alt="rooted logo" />
                <p>Master the art of plant care, one tip at a time.</p>
            </StyledImageContainer>
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
    z-index: 1000;
`;
const StyledImageContainer = styled.div`
    top: 27%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    background: var(--green-main);
    width: 250px;
    flex-direction: column;
    color: var(--gold);
    font-family: 'Assistant', sans serif;
    padding: 30px;
    border-radius: 35px;
`;