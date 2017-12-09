// **** DEPENDENCIES ****
const router = require("express").Router();
const dogProfilesController = require ("../../controllers/dogProfilesController");

// Route for "/api/dogProfiles"
router.route("/")
  .get(dogProfilesController.findAll)
  .post(dogProfilesController.create);

// Route for "/api/dogProfiles/:id" -- individual dog
router.route("/:id")
  .get(dogProfilesController.findById)
  .put(dogProfilesController.partialUpdate)
  .delete(dogProfilesController.remove);

module.exports = router;
