import dbConnect from "../../../db/connect";
import Reminder from "../../../db/models/Reminder";

export default async function handler(request, response) {
    await dbConnect();

    if(request.method === "GET") {
        const reminders = await Reminder.find();
        return response.status(200).json(reminders);

    }

    return response.status(405).json({ message: "Method not allowed"});

};

