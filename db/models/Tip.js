import mongoose from "mongoose";

const { Schema } = mongoose;

const tipSchema = new Schema({
    title: {type: String, required: true},
    shortBodyContent: {type: String, required: true},
    bodyContent: {type: String, required: true},
    imageUrl: {type: String, required: true},
    relatedPlants: {type: Array, required: false},
    bannerColor: {type: String, required: true},
});

const Tip = mongoose.models.Tip || mongoose.model("Tip", tipSchema);

export default Tip;