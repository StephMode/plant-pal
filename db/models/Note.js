import mongoose from "mongoose";

const { Schema } = mongoose;

const noteSchema = new Schema({
    headline: {type: String, required: true},
    note: {type: String, required: true},
    noteLocation: {type: String, required: true},
    dateCreated: {type: String, required: true},
});

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;