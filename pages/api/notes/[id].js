import dbConnect from "../../../db/connect";
import Note from "../../../db/models/Note";

export default async function handler(request, response){
    await dbConnect();
    const { id } = request.query;

    if(request.method === "GET") {
        const note = await Note.findById(id);

        if(!note) {
            return response.status(404).json({ status: "Not Found" });
        }

        response.status(200).json(note);
        return;
    }

    if(request.method === "PUT") {
        const updatedNote = request.body;

        await Note.findByIdAndUpdate(id, updatedNote);

        response.status(200).json({ status: "Note successfully updated."});
        return;
    }

    if(request.method === "DELETE") {
        await Note.findByIdAndDelete(id);

        response.status(200).json({ status: "Note deleted!" });
        return;
    }

    return response.status(405).json({ status: "Method not allowed" });
};