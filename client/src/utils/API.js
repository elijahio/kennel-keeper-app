import axios from "axios";

export default {
  // Gets all Tasks
  getGenTasks: function() {
    return axios.get("/api/getGenTasks");
  },
  // Gets the general task with the given id
  getGenTasks: function(id) {
    return axios.get("/api/getGenTasks/" + id);
  },
  // Deletes the general task with the given id
  deleteGenTasks: function(id) {
    return axios.delete("/api/getGenTasks/" + id);
  },
  // Saves a general task to the database
  saveGenTasks: function(genTaskData) {
    return axios.post("/api/getGenTasks", genTaskData);
  }
};