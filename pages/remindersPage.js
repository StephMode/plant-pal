import styled from "styled-components";
import ReminderCard from "/components/ReminderCard";
import { FaChevronLeft } from "react-icons/fa6";
import { useRouter } from "next/router";

export default function RemindersPage({reminders, handleDeleteReminder}) {
    const router = useRouter();

    return (
        <main>
            <h1>Reminders</h1>
            <StyledIconContainer onClick={() =>  router.back()} type="button">
          <FaChevronLeft />
        </StyledIconContainer>
            <StyledSpacer />
            <ul>
            {reminders.length === 0 && <StyledInfoText>Currently no reminders.</StyledInfoText>}
            {reminders
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((reminder) => 
                <li key={reminder.id}>
                    <ReminderCard plantName={reminder.plantName} task={reminder.task} date={reminder.date} id={reminder.id} reminderPage={true} handleDeleteReminder={handleDeleteReminder} plantId={reminder.relatedPlant} />
                </li>)}
            </ul>
        </main>
    )
}


const StyledSpacer = styled.span`
  display: block;
  height: 140px;
`;

const StyledInfoText = styled.p`
  color: var(--green-main);
  background-color: var(--gray);
  margin-top: 10px;
  padding: 40px 40px;
  border-radius: 25px;
`;

const StyledIconContainer = styled.button `
    background-color: var(--green-light);
    border-radius: 40px;
    border: none;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-size: 30px;
    position: absolute;
    top: 70px;
    left: 20px;
 `;