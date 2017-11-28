const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genTaskSchema = new Schema({
  name: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const genTask = mongoose.model("genTask", genTaskSchema);

module.exports = genTask;
