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
  saveGenTask: function(genTaskData) {
    return axios.post("/api/genTasks", genTaskData);
  },

   // Gets all users
  getUsers: function() {
    return axios.get("/api/userProfile");
  },
  // Gets the user withthe given id
  getUser: function(id) {
    return axios.get("/api/userProfile/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/userProfile/" + id);
  },
  // Saves a user to the database
  saveUsers: function(userData) {
    return axios.post("/api/userProfile", userData);
  },

     // Gets all dogs
  getDogs: function() {
    return axios.get("/api/dogProfiles");
  },
  // Gets the dog withthe given id
  getDog: function(id) {
    return axios.get("/api/dogProfiles/" + id);
  },
  // Deletes the dog with the given id
  deleteDog: function(id) {
    return axios.delete("/api/dogProfiles/" + id);
  },
  // Saves a dog to the database
  saveDogs: function(userData) {
    return axios.post("/api/dogProfiles", userData);
  }



};