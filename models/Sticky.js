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
  },
});

const Sticky = mongoose.model("sticky", StickySchema);

module.exports = Sticky;
