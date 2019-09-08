import React from 'react';
import { Table } from 'reactstrap';
import TripRow from "./index.js";
import API from "../Utility/API.js";
import GlobalContext from '../../context/index.js';


export default class TripList extends React.Component {
    static contextType = GlobalContext;

    state = {
        savedTrips: []
    };

    componentDidMount() {
        this.loadTrips();
    }




    loadTrips = () => {
        API.getTrips(this.context.user.id)
          .then(res => this.setState({ savedTrips: res.data }))
          .catch(err => console.log(err));
      };
    render() {
        console.log(this.context.user.id)
        console.log(this.state.savedTrips)
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Saved Trips</th>
                    </tr>
                </thead>
                {this.state.savedTrips.map(savedTrips => (
                    <TripRow
                        id={savedTrips.id}
                        tripName={savedTrips.tripName}
                        origin={savedTrips.origin}
                        destination={savedTrips.destination}
                    />
                ))}
            </Table>
        );
    }
}
