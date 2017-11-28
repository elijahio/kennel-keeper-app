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
  walk: { type: Boolean, default: false },
  outing: { type: Boolean, default: false },
  play: { type: Boolean, default: false },
  cuddling: { type: Boolean, default: false },
  training: { type: Boolean, default: false }
});

const dogProfile = mongoose.model("dogProfile", dogProfileSchema);

module.exports = dogProfile;
