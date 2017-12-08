const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genTaskSchema = new Schema({
  taskname: { type: String, required: true },
  completed: { type: Boolean, default: false }
},
{ collection : 'genTask' });

const genTask = mongoose.model("genTask", genTaskSchema);

module.exports = genTask;
