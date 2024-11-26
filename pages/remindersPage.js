import styled from "styled-components";
import ReminderCard from "/components/ReminderCard";

export default function RemindersPage({reminders, handleDeleteReminder}) {
    return (
        <main>
            <h1>Reminders</h1>
            <StyledSpacer />
            <ul>
            {reminders.map((reminder) => 
                <li key={reminder.id}>
                    <ReminderCard plantName={reminder.plantName} task={reminder.task} date={reminder.date} id={reminder.id} reminderPage={true} handleDeleteReminder={handleDeleteReminder} />
                </li>)}
            </ul>
        </main>
    )
}


const StyledSpacer = styled.span`
  display: block;
  height: 113px;
`;