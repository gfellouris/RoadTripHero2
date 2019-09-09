import axios from "axios";

export default {
    // Save trip plans for auser
    saveTrip: function () {
        return axios.post("/api/savetripplan")
    },
    // Get all trips for a user
    getTrips: function (user) {
        return axios.get("/api/gettripplans/" + user.id);
    },

    getUser: function (user) {
        return axios.get("/api/userprofile/" + user.uid)
    },

    createUser: function (user) {
        return axios.post("/api/insertuser", user);
    }
}