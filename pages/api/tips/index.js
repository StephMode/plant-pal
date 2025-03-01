import dbConnect from "../../../db/connect";
import Tip from "../../../db/models/Tip";

export default async function handler(request, response) {
    await dbConnect();

    if(request.method === "GET") {
        const tips = await Tip.find();
        return response.status(200).json(tips);
    } else {
        return response.status(405).json({ message: "Method not allowed" });
    }
};