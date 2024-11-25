import ReminderCard from "@/components/ReminderCard";

export default function RemindersPage({reminders}) {
    return (
        <main>
            <h1>Your reminders</h1>
            <ul>
            {reminders.map((reminder) => 
                <li key={reminder.plantName}>
                    <ReminderCard plantName={reminder.plantName} task={reminder.task} date={reminder.date} reminderPage={true} />
                </li>)}
            </ul>
        </main>
    )
}