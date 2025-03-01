import dbConnect from "../../../db/connect";
import Reminder from "../../../db/models/Reminder";

export default async function handler(request, response) {
    await dbConnect();

    if(request.method === "GET") {
        const reminders = await Reminder.find();
        return response.status(200).json(reminders);

    }

    if(request.method === "POST") {
        try {
            const reminderData = request.body;
            const reminder = new Reminder(reminderData);
            await reminder.save();
            return response.status(201).json({ status: "Reminder successfully added." });
        } catch (error) {
            console.error(error);
            return response.status(400).json({ error: error.message });
        }
    }

    return response.status(405).json({ message: "Method not allowed"});

};

