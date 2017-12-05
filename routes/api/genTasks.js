// **** DEPENDENCIES ****
const router = require("express").Router();
const genTasksController = require ("../../controllers/genTasksController");

// Route for "/api/genTasks"
router.route("/")
  .get(genTasksController.findAll)
  .post(genTasksController.create);

// Route for "/api/genTasks/:id" -- individual dog
router.route("/:id")
  .get(genTasksController.findById)
  .put(genTasksController.update)
  .delete(genTasksController.remove);

module.exports = router;
