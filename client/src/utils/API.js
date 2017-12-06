import axios from "axios";

export default {
  // Gets all Tasks
  getGenTasks: function() {
    return axios.get("/api/genTasks");
  },
  // Gets the general task with the given id
  getGenTask: function(id) {
    return axios.get("/api/genTasks/" + id);
  },
  // Deletes the general task with the given id
  deleteGenTask: function(id) {
    return axios.delete("/api/genTasks/" + id);
  },
  // Saves a general task to the database
  saveGenTasks: function(genTaskData) {
    return axios.post("/api/genTasks", genTaskData);
  }
};