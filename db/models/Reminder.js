import mongoose from "mongoose";

const { Schema } = mongoose;

const reminderSchema = new Schema({
    plantName: {type: String, required: true},
    task: {type: String, required: true},
    date: {type: String, required: true },
    relatedPlant: {type: String, required: true}
});


const Reminder = mongoose.models.Reminder || mongoose.model("Reminder", reminderSchema);


export default Reminder;