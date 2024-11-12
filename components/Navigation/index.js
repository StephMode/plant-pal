import styled from "styled-components"
import { HiHome } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";

export default function Navigation() { 
    return (
        <Stylednavcontainer>
            <StyledIconContainer><HiHome /></StyledIconContainer>
            <StyledIconContainer><FaPlus /></StyledIconContainer>
            <StyledIconContainer><IoHeart /></StyledIconContainer>
        </Stylednavcontainer>
    )
}

const Stylednavcontainer = styled.nav`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: var(--green-light);
    border-radius: 20px 20px 0 0 ;
    z-index: 999;
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 0px 37px rgba(0, 0, 0, 0.5);
`;
 const StyledIconContainer = styled.span `
    background-color: var(--green-main);
    border-radius: 40px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-size: 30px;

    
 `;