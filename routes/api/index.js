// **** DEPENDENCIES ****
const router = require("express").Router();
const dogRoutes = require("./dogProfiles");
const taskRoutes = require("./genTasks");
const userRoutes = require("./userProfile");

// Dog profile routes
router.use("/dogProfiles", dogRoutes);

// General Task routes
router.use("/genTasks", taskRoutes);

// User profile routes
router.use("/userProfile", userRoutes);

module.exports = router;
