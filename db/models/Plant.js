import mongoose from "mongoose";

const { Schema } = mongoose;

const plantSchema = new Schema({
    name: { type: String, required: true},
    botanicalName: { type: String, required: false},
    imageUrl: { type: String, required: false},
    waterNeed: { type: String, required: true},
    lightNeed: { type: String, required: true},
    fertiliserSeason: { type: Array, required: true},
    description: { type: String, required: false},
});

const Plant = mongoose.models.Plant || mongoose.model("Plant", plantSchema);

export default Plant;