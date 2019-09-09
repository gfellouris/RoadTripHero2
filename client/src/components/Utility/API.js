import axios from "axios";

export default {
    // Save trip plans for auser
    saveTrip: function (trip) {
        return axios.post("/api/savetripplan", trip)
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
    },
    
    removeTrip: function (id) {
        return axios.delete("/api/deletetripplan/" + id )
    }
}