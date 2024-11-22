import styled from "styled-components"
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function IntroPage() {

    const router = useRouter();

    useEffect(() => {
      const timer = setTimeout(() => {
        router.push('/home');
      }, 4500); 
      return () => clearTimeout(timer); 
    }, [router]);

    return(
        <StyledIntroContainer>
            <StyledImageContainer>
                <Image src="/logo-main.svg" width={200} height={50} alt="rooted logo" />
                <StyledBaseline>Master the art of plant care, one tip at a time.</StyledBaseline>
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
    animation-name: logo;
    animation-duration: 5s;
    transition: all cubic-bezier(0.65, 0.05, 0.36, 1);;

@keyframes logo {
  0%   {left:0px; top:0px; opacity:0;background: var(--green-light);}
  10%  {opacity:0;}
  30% {left:0px; top: 27%;opacity:1;background: var(--green-main);}
  70% {left:0px; top: 27%;opacity:1;background: var(--green-main);}
  100% {left:0px; top: 50%;opacity:0;}
}
`;
const StyledBaseline = styled.p`
    text-align: center;
    margin-top: 10px;
`;