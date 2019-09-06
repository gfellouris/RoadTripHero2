import axios from "axios";

export default {
    // Save trip plans for auser
    saveTrip: function () {
        return axios.post("/api/savetripplan")
    },
    // Get all trips for a user
<<<<<<< HEAD
    getTrips: function () {
        return axios.get("/api/gettriplans/abV446ObDaVx7Ql2w5xEyou7Jfm2");
=======
    getTrips: function (user) {
        return axios.get("/api/getTripPlans/" + user.id);
>>>>>>> 0224e3faeb9e313ee3d8f623cb18acaee0f66167
    },

    getUser: function (user) {
        return axios.get("/api/userprofile/" + user.uid)
    },

    createUser: function (user) {
        return axios.post("/api/insertuser", user);
    }
}