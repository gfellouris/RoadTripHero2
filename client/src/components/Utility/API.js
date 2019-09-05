import axios from "axios"

export default {
    // Save trip plans for auser
    saveTrip: function () {
        return axios.post("/api/savetripplan")
    },
    // Get all trips for a user
    getTrips: function () {
        return axios.get("/api/getTripPlans/" + uid);
    },
}