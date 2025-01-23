import dbConnect from "../../../db/connect";
import Plant from "../../../db/models/Plant";

export default async function handler(request, response) {
    await dbConnect();

    if (request.method === "GET") {
        const plants = await Plant.find();
        const reversedPlants = plants.reverse(); // new added plants will be shown at the top of the plant list
        return response.status(200).json(reversedPlants);
    } 

    if (request.method === "POST") {
        try {
            const plantData = request.body;
            const plant = new Plant(plantData);
            await plant.save();
            return response.status(201).json({ status: "Plant successfully added."});
        } catch (error) {
            console.error(error);
            return response.status(400).json({ error: error.message });
        }
    }

    return response.status(405).json({ message: "Method not allowed" });

};