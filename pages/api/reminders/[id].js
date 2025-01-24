import dbConnect from "../../../db/connect";
import Reminder from "../../../db/models/Reminder";


export default async function handler(request, response) {
    await dbConnect();
    const { id } = request.query;

    if (request.method === "GET") {
        const reminder = await Reminder.findById(id);

        if(!reminder) {
            return response.status(400).json({ status: "Not found"});
        }

        response.status(200).json(reminder);
        return;
    }

    if (request.method === "DELETE") {
        await Reminder.findByIdAndDelete(id);

        response.status(200).json({ status: "Reminder deleted" });
        return;
    }

    return response.status(405).json({ status: "Method not allowed" });

};