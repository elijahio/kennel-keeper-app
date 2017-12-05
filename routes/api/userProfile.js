// **** DEPENDENCIES ****
const router = require("express").Router();
const userProfileController = require ("../../controllers/userProfileController");

// Route for "/api/userProfile"
router.route("/")
  .get(userProfileController.findAll)
  .post(userProfileController.create);

// Route for "/api/userProfile/:id" -- individual dog
router.route("/:id")
  .get(userProfileController.findById)
  .put(userProfileController.update)
  .delete(userProfileController.remove);

module.exports = router;
