const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogProfileSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  meds: { type: Boolean, default: false },
  swept: { type: Boolean, default: false },
  mopped: { type: Boolean, default: false },
  bedding: { type: Boolean, default: false },
  cleanedOutdoor: { type: Boolean, default: false },
  sprayedOutdoor: { type: Boolean, default: false },
  walk: { type: int, default: 0 },
  outing: { type: int, default: 0 },
  play: { type: int, default: 0 },
  cuddling: { type: int, default: 0 },
  training: { type: int, default: 0 }
},
{ collection : 'dogProfile' });


const dogProfile = mongoose.model("dogProfile", dogProfileSchema);

module.exports = dogProfile;
