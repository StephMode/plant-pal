import Link from "next/link";
import { useRouter } from "next/router";
import styled, {ThemeProvider} from "styled-components"
import { HiHome } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";
import { RiCalendarFill } from "react-icons/ri";


export default function Navigation({reminders, currentDate}) { 

    const router = useRouter();

    const showNotification = reminders.some(reminder => reminder.date <= currentDate);
    
    return (
        <>
            <StyledNavContainer>
                <Link href="/home" passHref >
                    <StyledIconContainer $isactive={router.asPath === "/home"}>
                        <HiHome />
                    </StyledIconContainer>
                </Link>
                <Link href="/plantTipsPage" passHref>
                    <StyledIconContainer $isactive={router.asPath === "/plantTipsPage"}>
                        <RiPlantFill />
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
                <Link href="/remindersPage" passHref>
                    <ThemeProvider theme={showNotification ? notificationTheme : defaultTheme}>
                    {showNotification && <StyledNotificationIcon></StyledNotificationIcon>}
                    <StyledIconContainer $isactive={router.asPath === "/remindersPage"}>
                        <RiCalendarFill />
                    </StyledIconContainer>
                    </ThemeProvider>
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
    position: ${props => props.theme.position};
    top: ${props => props.theme.top};
 `;


const notificationTheme = {
    position: "relative",
    top: "-6px",
}

const defaultTheme = {
    position: "static",
    top: "none",
}

const StyledNotificationIcon = styled.span`
    display: block;
    background-color: var(--error-red);
    border-radius: 50%;
    height: 16px;
    width: 16px;
    position: relative;
    top: 16px;
    right: -26px;
    z-index: 1;
`;





