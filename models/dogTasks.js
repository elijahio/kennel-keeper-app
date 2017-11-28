const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogTaskSchema = new Schema({
  taskname: { type: String, required: true },
  status: { type: Boolean, default: false },
});

const dogTask = mongoose.model("dogTask", dogTaskSchema);

module.exports = dogTask;