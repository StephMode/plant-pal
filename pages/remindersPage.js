import styled from "styled-components";
import ReminderCard from "/components/ReminderCard";

export default function RemindersPage({reminders, handleDeleteReminder}) {
    return (
        <main>
            <h1>Reminders</h1>
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
  height: 113px;
`;

const StyledInfoText = styled.p`
  color: var(--green-main);
  background-color: var(--gray);
  margin-top: 10px;
  padding: 40px 40px;
  border-radius: 25px;
`;