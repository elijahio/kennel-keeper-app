// Schema for the user model.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Data saved to each userProfile. If you can think of anything else to add plz let me know -jpm
const userProfileSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true},
	email: { type: String, required: true },
	phone: { type: String, required: true },
  adminStatus: { type: Boolean, default: false }
},
{ collection : 'userProfile' });

const userProfile = mongoose.model("userProfile", userProfileSchema);

module.exports = userProfile;
