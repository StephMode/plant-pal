import Button from "../Button";

export default function ReminderForm() {
    return (
        <form>
            <h2>Create Reminder for {plantName}</h2>
            <label htmlFor="task">
                <input type="text" id="task" name="task" placeholder="e.g. watering"></input> 
            </label>
            <label htmlFor="date">
                <input type="date" id="date" name="date"></input> 
            </label>
            <Button buttonText="Cancel" />
            <button type="submit">Create Reminder</button>
        </form>

    );
}

