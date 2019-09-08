import React from 'react';
import { Table } from 'reactstrap';
import TripCard from "./TripCard.js";
import API from "../Utility/API.js";
import GlobalContext from '../../context/';


export default class TripList extends React.Component {
    static contextType = GlobalContext;

    state = {
        savedTrips: [
            {
            "id": 3,
            "userId": 9,
            "tripName": "Trip to Spain",
            "origin": "1234 main st",
            "destination": "disney world",
            "numberOfStops": 9
            },
            {
            "id": 4,
            "userId": 9,
            "tripName": "Girls trip",
            "origin": "300 Atrium drive, somerset, nj",
            "destination": "disney land",
            "numberOfStops": 4
            }
            ]
    };

    // componentDidMount() {
    //    console.log(this.props.user)
    //         this.loadTrips(this.props.user);
    //     }

        

    loadTrips = (user) => {
        console.log(this.context.user)
        API.getTrips(user)
          .then(
              res => {
              console.log(res.data)
              this.setState({ savedTrips: res.data })})
          .catch(err => console.log(err));
      };

    render() {
        console.log(this.context.user)
        console.log(this.state.savedTrips)
        console.log(this.props.user)
        return (
            <div>
                
                {this.state.savedTrips.map(savedTrips => (
                    <TripCard
                        id={savedTrips.id}
                        tripName={savedTrips.tripName}
                        origin={savedTrips.origin}
                        destination={savedTrips.destination}
                    />
                ))}
           </div>
        );
    }
}
