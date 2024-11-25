import styled from "styled-components";
import { RiCalendarScheduleFill } from "react-icons/ri";
import Button from "../Button";

export default function ReminderCard({plantName, task, date, reminderPage}) {

    return (
            <StyledReminderCard>
                <StyledIconContainer>
                    <RiCalendarScheduleFill />
                </StyledIconContainer>
                {reminderPage && <h2>{plantName}</h2>}
                <p><b>{task}:</b> {date}</p>
                {reminderPage && <StyledButton type="button">Mark as done</StyledButton>}
            </StyledReminderCard>
    );
}



const StyledReminderCard = styled.article`
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    border-radius: 25px;
    margin-bottom: 10px;
    width: 350px;
    justify-content: flex-start;
    box-shadow: 0 0px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 750px) {
    width: 330px;
  }
`;


const StyledIconContainer = styled.span`
    align-self: flex-end;
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