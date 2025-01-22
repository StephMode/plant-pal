import dbConnect from "../../../db/connect";
import Tip from "../../../db/models/Tip";

export default async function handler(request, response) {
    await dbConnect();

    if(request.method === "GET") {
        const tip = await Tip.findById(id);

        if(!tip) {
            return response.status(400).json({ message: "Not found"});
        }

        response.status(200).json(tip);
    }
};