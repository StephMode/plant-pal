import { RiCalendarScheduleFill } from "react-icons/ri";
import Button from "../Button";

export default function ReminderCard({plantName, task, date, reminderPage}) {

    return (
        <article>
            <RiCalendarScheduleFill />
            {reminderPage && <p>{plantName}</p>}
            <p>{task}</p>
            <p>{date}</p>
            {reminderPage && <Button buttonText="Mark as done" />}
        </article>
    );
}