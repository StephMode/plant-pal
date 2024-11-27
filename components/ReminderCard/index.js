import styled, {ThemeProvider} from "styled-components";
import { RiCalendarScheduleFill } from "react-icons/ri";
import Link from "next/link";


export default function ReminderCard({
    plantName, 
    task, 
    date, 
    id, 
    reminderPage, 
    handleDeleteReminder, 
    plantId}) {

    return (
        <ThemeProvider theme={reminderPage ? reminderPageTheme : plantDetailsPageTheme}>
            {reminderPage ? 
            (
             <StyledReminderCard>
                <StyledIconContainer>
                    <RiCalendarScheduleFill />
                </StyledIconContainer>
                <Link href={`/plants/${plantId}`}>
                    <StyledH2>{plantName}</StyledH2>
                </Link>
                <StyledReminderContent><b>{task}:</b> {date}</StyledReminderContent>
                <StyledButton type="button" onClick={() => handleDeleteReminder(id, task)}>Mark as done</StyledButton>
            </StyledReminderCard>
            )
            :
            (
            <Link href='/remindersPage'>
                <StyledReminderCard>
                    <StyledIconContainer>
                        <RiCalendarScheduleFill />
                    </StyledIconContainer>
                    <StyledReminderContent><b>{task}:</b> {date}</StyledReminderContent>
                </StyledReminderCard>
            </Link>
            )}
        </ThemeProvider>
    );
}


const reminderPageTheme = {
    width: "350px",
    minWidth: "330px",
    marginLeft: "0px",
    marginBottom: "10px",
    alignSelf: "flex-end",
    boxShadow: "0 0px 15px rgba(0, 0, 0, 0.3)",
    backgroundColor: "var(--white)", 
    backgroundColorHover: "none",
    transition: "none"  
};

const plantDetailsPageTheme = {
    width: "300px",
    minWidth: "300px",
    marginLeft: "40px",
    marginBottom: "0px",
    alignSelf: "flex-start",
    boxShadow: "none",
    backgroundColor: "rgb(240, 240, 240)",
    backgroundColorHover: "var(--gray)",
    transition: "all 0.45s ease 0s"
};

const StyledReminderCard = styled.article`
    background-color: ${props => props.theme.backgroundColor};
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    border-radius: 25px;
    margin-bottom: ${props => props.theme.marginBottom};
    width: ${props => props.theme.width};
    justify-content: flex-start;
    box-shadow: ${props => props.theme.boxShadow};

    &:hover {
        background-color: ${props => props.theme.backgroundColorHover};
        transition: ${props => props.theme.transition};
    }

  @media (max-width: 750px) {
    width: ${props => props.theme.minWidth};
  }
`;

const StyledReminderContent = styled.p`
    margin-left: ${props => props.theme.marginLeft};
`;

const StyledH2 = styled.h2`
    max-width: 260px;

    &:hover {
    color: var(--green-light-dark);
    transition: all 0.45s ease 0s;
  }
`;

const StyledIconContainer = styled.span`
    align-self: ${props => props.theme.alignSelf};
    font-size: 1.5rem;
    position: absolute;
    color: var(--black);
`;

const StyledButton = styled.button`
    width: 140px;
    align-self: center;
    padding: 8px 10px 6px;
    margin: 10px 0 5px 0;
    border: none;
    border-radius: 20px;
    background-color: var(--brown);
    color: var(-green-main);
    font-size: 14px;
    cursor: pointer;
    transition: 0.5s ease-in-out;

    &:hover {
    background-color: var(--brown-dark);
    color: var(--white);
  }
`;