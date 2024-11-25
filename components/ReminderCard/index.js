import styled, {ThemeProvider} from "styled-components";
import { RiCalendarScheduleFill } from "react-icons/ri";


export default function ReminderCard({plantName, task, date, reminderPage}) {

    return (
        <ThemeProvider theme={reminderPage ? reminderPageTheme : plantDetailsPageTheme}>
            <StyledReminderCard>
                <StyledIconContainer>
                    <RiCalendarScheduleFill />
                </StyledIconContainer>
                {reminderPage && <h2>{plantName}</h2>}
                <StyledReminderContent><b>{task}:</b> {date}</StyledReminderContent>
                {reminderPage && <StyledButton type="button">Mark as done</StyledButton>}
            </StyledReminderCard>
        </ThemeProvider>
    );
}


const reminderPageTheme = {
    width: "350px",
    minWidth: "330px",
    marginLeft: "0px",
    alignSelf: "flex-end",
    boxShadow: "0 0px 15px rgba(0, 0, 0, 0.3)",
    backgroundColor: "var(--white)",
};

const plantDetailsPageTheme = {
    width: "300px",
    minWidth: "300px",
    marginLeft: "40px",
    alignSelf: "flex-start",
    boxShadow: "none",
    backgroundColor: "rgb(240, 240, 240)",
};


const StyledReminderCard = styled.article`
    background-color: ${props => props.theme.backgroundColor};
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    border-radius: 25px;
    margin-bottom: 10px;
    width: ${props => props.theme.width};
    justify-content: flex-start;
    box-shadow: ${props => props.theme.boxShadow};

  @media (max-width: 750px) {
    width: ${props => props.theme.minWidth};
  }
`;

const StyledReminderContent = styled.p`
    margin-left: ${props => props.theme.marginLeft};
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