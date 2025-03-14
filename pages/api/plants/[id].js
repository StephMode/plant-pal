import dbConnect from "../../../db/connect";
import Plant from "../../../db/models/Plant";

export default async function handler(request, response){
    await dbConnect();
    const { id } = request.query;

    if(request.method === "GET") {
        const plant = await Plant.findById(id);

        if(!plant) {
            return response.status(404).json({ status: "Not Found" });
        }

        response.status(200).json(plant);
        return;
    }

    if(request.method === "PUT") {
        const updatedPlant = request.body;

        await Plant.findByIdAndUpdate(id, updatedPlant, { new: true});

        response.status(200).json({ status: "Plant successfully updated."});
        return;
    }

    if(request.method === "DELETE") {
        await Plant.findByIdAndDelete(id);

        response.status(200).json({ status: "Plant deleted!" });
    }

    return response.status(405).json({ status: "Method not allowed" });
};