const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const StickySchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});