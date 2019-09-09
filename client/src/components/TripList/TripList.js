import React from 'react';
import TripCard from "./TripCard.js";
import API from "../Utility/API.js";

export default class TripList extends React.Component {

    state = {
        savedTrips: []
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user !== this.props.user) {
          this.loadTrips(this.props.user);
        }
      }

      loadTrips = user => {
        API.getTrips(user)
          .then(res => {
            console.log(res.data);
            this.setState({ savedTrips: res.data });
          })
          .catch(err => console.log(err));
      };
    
      render() {
     
        console.log(this.state.savedTrips);
    

   
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
