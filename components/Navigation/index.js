import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components"
import { HiHome } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";
import { RiCalendarScheduleFill } from "react-icons/ri";


export default function Navigation() { 

    const router = useRouter();

    return (
        <>
            <StyledNavContainer>
                <Link href="/home" passHref >
                    <StyledIconContainer $isactive={router.asPath === "/"}>
                        <HiHome />
                    </StyledIconContainer>
                </Link>
                <Link href="/addplant" passHref>
                    <StyledIconContainer $isactive={router.asPath === "/addplant"}>
                        <FaPlus />
                    </StyledIconContainer>
                </Link>
                <Link href="/myplants" passHref>
                    <StyledIconContainer $isactive={router.asPath === "/myplants"}>
                        <IoHeart />
                    </StyledIconContainer>
                </Link>
                <Link href="/plantTipsPage" passHref>
                    <StyledIconContainer $isactive={router.asPath === "/plantTipsPage"}>
                        <RiPlantFill />
                    </StyledIconContainer>
                </Link>
                <Link href="/remindersPage" passHref>
                    <StyledIconContainer $isactive={router.asPath === "/remindersPage"}>
                        <RiCalendarScheduleFill />
                    </StyledIconContainer>
                </Link>
            </StyledNavContainer>
        </>

    )
}

const StyledNavContainer = styled.nav`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: var(--green-main);
    border-radius: 20px 20px 0 0 ;
    z-index: 999;
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 0px 37px rgba(0, 0, 0, 0.5);
`;
 const StyledIconContainer = styled.span `
    background-color:  ${({ $isactive }) => ($isactive ? "var(--brown)" : "var(--green-main)")};;
    border-radius: 40px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-size: 2.2rem;
 `;
