import axios from "axios";
import GlobalContext from "../../context/";

export default {
    // Save trip plans for auser
    saveTrip: function () {
        return axios.post("/api/savetripplan")
    },
    // Get all trips for a user
    getTrips: function () {
        return axios.get("/api/getTripPlans/abV446ObDaVx7Ql2w5xEyou7Jfm2");
    },
}